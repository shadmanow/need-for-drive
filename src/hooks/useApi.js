import { useState, useCallback } from 'react'

export const API_URL = process.env.REACT_APP_API_URL
const API_APP_ID = process.env.REACT_APP_API_APP_ID
const API_TOKEN = process.env.REACT_APP_API_TOKEN

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
  'X-Api-Factory-Application-Id': API_APP_ID,
}

function useApi(url) {
  const [loading, setLoading] = useState(false)

  /* eslint-disable */
  const get = useCallback(async (params = '') => {
    try {
      setLoading(true)

      const response = await fetch(`${API_URL}/api/${url}${params}`, {
        headers,
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = await response.json()
      setLoading(false)

      return data
    } catch (e) {
      console.error(e)
      setLoading(false)
    }
  }, [])
  /* eslint-enable */

  return [{ get, post: null }, loading]
}

export default useApi
