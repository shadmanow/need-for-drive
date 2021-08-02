import { useCallback } from 'react'

const API_KEY = process.env.REACT_APP_MAPQUEST_API_KEY
const API_URL = process.env.REACT_APP_MAPQUEST_API_URL

function useMapQuestApi() {
  const getCity = useCallback(async (city) => {
    try {
      const response = await fetch(
        `${API_URL}/address?key=${API_KEY}&location=${city}`
      )

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const { results } = await response.json()
      const { locations } = results[0]
      const { latLng } = locations.filter(
        (location) => location.adminArea1 === 'RU'
      )[0]
      return latLng
    } catch (e) {
      console.error(e)
    }
  }, [])

  const getStreets = useCallback(async (city, streets) => {
    try {
      let url = `http://www.mapquestapi.com/geocoding/v1/batch?key=${API_KEY}`

      for (let i = 0; i < streets.length; i++) {
        url += `&location=${city},${streets[i]}`
      }

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const { results } = await response.json()
      const locations = results.map((result) => result.locations[0])
      const latLngArray = locations.map((location) => location.latLng)
      return latLngArray
    } catch (e) {
      console.error(e)
    }
  }, [])

  return { getCity, getStreets }
}

export { useMapQuestApi }
