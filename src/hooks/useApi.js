import { useCallback } from 'react'
import { firstToUpperCase } from '../helpers/StringHelper'
import {
  API_TOKEN,
  API_APP_ID,
  API_URL,
  CONFIRMED_ORDER_STATUS_ID,
  CANCELED_ORDER_STATUS_ID,
} from './useApiConstants'

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
  'X-Api-Factory-Application-Id': API_APP_ID,
  'Content-Type': 'application/json',
}

const request = async (url, method = 'GET', body) => {
  const response = await fetch(`${API_URL}/api/${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
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
    category: categoryId?.name,
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

const orderToBody = (order) => {
  const {
    cityId,
    pointId,
    carId,
    color,
    dateFrom,
    dateTo,
    rateId,
    price,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
  } = order
  return {
    cityId: cityId.id,
    pointId: pointId.id,
    carId: carId.id,
    rateId: rateId.id,
    dateFrom: dateFrom.getTime(),
    dateTo: dateTo.getTime(),
    color,
    price,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
  }
}

export default function useApi() {
  const fetchCitiesAndPoints = useCallback(async () => {
    let { data: cities } = await request('/db/city')
    let { data: points } = await request('/db/point')

    cities = cities.map(cityMap)
    points = points.filter(({ cityId }) => cityId).map(pointMap)
    cities = cities.filter((city) =>
      points.some((point) => point.city.name === city.name)
    )
    return { cities, points }
  }, [])

  const fetchCars = useCallback(async (params = '') => {
    let { data } = await request(`/db/car${params}`)
    return data.map(carMap)
  }, [])

  const fetchRates = useCallback(async () => {
    const { data } = await request('/db/rate')
    return data.map(rateMap)
  }, [])

  const fetchCategories = useCallback(async () => {
    const { data } = await request('/db/category')
    return data.map(({ name }) => name)
  }, [])

  const sendOrder = useCallback(async (order) => {
    const { data } = await request('/db/order', 'POST', {
      ...orderToBody(order),
      orderStatusId: CONFIRMED_ORDER_STATUS_ID,
    })
    return data.id
  }, [])

  const cancelOrder = useCallback(async (order) => {
    const { data } = await request(`/db/order/${order.id}`, 'PUT', {
      ...orderToBody(order),
      orderStatusId: CANCELED_ORDER_STATUS_ID,
    })
    return data.id
  }, [])

  const fetchOrder = useCallback(async (id) => {
    const { data } = await request(`/db/order/${id}`)
    data.carId = carMap(data.carId)
    data.cityId = cityMap(data.cityId)
    data.pointId = pointMap(data.pointId)
    data.rateId = rateMap(data.rateId)
    data.dateFrom = new Date(data.dateFrom)
    data.dateTo = new Date(data.dateTo)
    return data
  }, [])

  return {
    fetchCitiesAndPoints,
    fetchCars,
    fetchRates,
    fetchCategories,
    sendOrder,
    fetchOrder,
    cancelOrder,
  }
}
