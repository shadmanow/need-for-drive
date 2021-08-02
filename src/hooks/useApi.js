import { useState, useCallback } from 'react'

const API_URL = process.env.REACT_APP_API_URL // https://api-factory.simbirsoft1.com
const API_APP_ID = process.env.REACT_APP_API_APP_ID
const API_TOKEN = process.env.REACT_APP_API_TOKEN

function useApi() {
  const [loading, setLoading] = useState(false)

  const get = useCallback(async (url) => {
    try {
      setLoading(true)
      const headers = {
        Authorization: `Bearer ${API_TOKEN}`,
        'X-Api-Factory-Application-Id': API_APP_ID,
      }
      const response = await fetch(`${API_URL}/api/${url}`, {
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

  return { get, loading }
}

export { useApi, API_URL }
