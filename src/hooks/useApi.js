import { useCallback } from 'react'
import { firstToUpperCase } from '../helpers/StringHelper'

export const API_URL = process.env.REACT_APP_API_URL
const API_APP_ID = process.env.REACT_APP_API_APP_ID
const API_TOKEN = process.env.REACT_APP_API_TOKEN

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
  'X-Api-Factory-Application-Id': API_APP_ID,
}

const get = async (url) => {
  const response = await fetch(`${API_URL}/api/${url}`, {
    headers,
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

function useApi() {
  const fetchCitiesAndPoints = useCallback(async () => {
    let { data: cities } = await get('/db/city')
    let { data: points } = await get('/db/point')

    cities = cities.map(({ id, name }) => ({ id, name }))
    points = points
      .filter(({ cityId }) => cityId)
      .map(({ id, address, cityId: city }) => ({
        id,
        city,
        address,
      }))
    cities = cities.filter((city) =>
      points.some((point) => point.city.name === city.name)
    )
    return { cities, points }
  }, [])

  const fetchCars = useCallback(async (params = '') => {
    let { data } = await get(`/db/car${params}`)
    return data
      .filter(({ categoryId, tank, number }) => categoryId && tank && number)
      .map(
        ({
          id,
          name,
          categoryId,
          priceMax,
          priceMin,
          thumbnail,
          colors,
          tank,
          number,
        }) => {
          const { name: category } = categoryId

          let { path: imgPath } = thumbnail
          if (imgPath.startsWith('/files')) {
            imgPath = `${API_URL}${imgPath}`
          }

          return {
            id,
            name,
            colors: colors.map((color) => firstToUpperCase(color)),
            imgPath,
            priceMax,
            priceMin,
            tank,
            number,
            category,
          }
        }
      )
  }, [])

  const fetchRates = useCallback(async () => {
    const { data } = await get('/db/rate')
    return data.map(({ id, price, rateTypeId }) => ({
      id,
      price,
      unit: rateTypeId.unit,
      name: rateTypeId.name,
    }))
  }, [])

  return { fetchCitiesAndPoints, fetchCars, fetchRates }
}

export default useApi
