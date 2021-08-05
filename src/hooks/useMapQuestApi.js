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
      let url = `${API_URL}/batch?key=${API_KEY}`

      for (const street of streets) {
        url += `&location=${city},${street}`
      }

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const { results } = await response.json()

      const locations = results.map((result) => {
        const { locations, providedLocation } = result
        const { lat, lng } = locations[0].latLng
        const { location } = providedLocation
        const street = location.substr(location.indexOf(',') + 1)

        return { city, street, lat, lng }
      })

      return locations
    } catch (e) {
      console.error(e)
    }
  }, [])

  return { getCity, getStreets }
}

export { useMapQuestApi }
