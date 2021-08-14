import { useCallback } from 'react'
import { firstToUpperCase } from '../helpers/StringHelper'

export const API_URL = process.env.REACT_APP_API_URL
const API_APP_ID = process.env.REACT_APP_API_APP_ID
const API_TOKEN = process.env.REACT_APP_API_TOKEN
const NEW_ORDER_STATUS_ID = '5e26a191099b810b946c5d89'

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

const post = async (url, body) => {
  const response = await fetch(`${API_URL}/api/${url}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}

const carMap = ({
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

const rateMap = ({ id, price, rateTypeId }) => ({
  id,
  price,
  unit: rateTypeId.unit,
  name: rateTypeId.name,
})

const cityMap = ({ id, name }) => ({ id, name })

const pointMap = ({ id, address, cityId: city }) => ({
  id,
  city,
  address,
})

function useApi() {
  const fetchCitiesAndPoints = useCallback(async () => {
    let { data: cities } = await get('/db/city')
    let { data: points } = await get('/db/point')

    cities = cities.map(carMap)
    points = points.filter(({ cityId }) => cityId).map(pointMap)
    cities = cities.filter((city) =>
      points.some((point) => point.city.name === city.name)
    )
    return { cities, points }
  }, [])

  const fetchCars = useCallback(async (params = '') => {
    let { data } = await get(`/db/car${params}`)
    return data
      .filter(({ categoryId, tank, number }) => categoryId && tank && number)
      .map(carMap)
  }, [])

  const fetchRates = useCallback(async () => {
    const { data } = await get('/db/rate')
    return data.map(rateMap)
  }, [])

  const sendOrder = useCallback(async (order) => {
    const { data } = await post('/db/order', {
      ...order,
      dateFrom: order.dateFrom.getTime(),
      dateTo: order.dateFrom.getTime(),
      orderStatusId: NEW_ORDER_STATUS_ID,
    })
    return data.id
  }, [])

  const fetchOrder = useCallback(async (id) => {
    const { data } = await get(`/db/order/${id}`)
    data.carId = carMap(data.carId)
    data.cityId = cityMap(data.cityId)
    data.pointId = pointMap(data.pointId)
    data.rateId = rateMap(data.rateId)
    data.dateFrom = new Date(data.dateFrom)
    data.dateTo = new Date(data.dateTo)
    return data
  }, [])

  return { fetchCitiesAndPoints, fetchCars, fetchRates, sendOrder, fetchOrder }
}

export default useApi
