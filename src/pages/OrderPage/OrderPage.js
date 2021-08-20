import React, { useState, useEffect } from 'react'
import {
  Redirect,
  Route,
  Switch,
  useParams,
  useHistory,
} from 'react-router-dom'

import './OrderPage.scss'
import { DEFAULT_VALUES } from './OrderPageConstats'
import priceCalc from './PriceCalculator'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import OrderDescription from '../../components/OrderDescription/OrderDescription'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import LocationForm from '../LocationForm/LocationForm'
import CarForm from '../CarForm/CarForm'
import OptionsForm from '../OptionsForm/OptionsForm'
import useApi from '../../hooks/useApi'
import Loader from '../../components/Loader/Loader'
import Total from '../Total/Total'

const OrderPage = ({ location }) => {
  const {
    fetchCitiesAndPoints,
    fetchCars,
    fetchRates,
    fetchOrder,
    fetchCategories,
    cancelOrder,
    sendOrder,
  } = useApi()
  const history = useHistory()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    cities: [],
    rates: [],
    points: [],
    cars: [],
    categories: [],
  })
  const [order, setOrder] = useState(DEFAULT_VALUES)

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoading(true)
        const order = await fetchOrder(id)
        setOrder({ ...order })
        setLoading(false)
      }
      fetchData()
    } else {
      const fetchData = async () => {
        setLoading(true)
        const { cities, points } = await fetchCitiesAndPoints()
        const cars = await fetchCars('?limit=30')
        const rates = await fetchRates()
        const categories = await fetchCategories()
        setData({ cities, points, cars, rates, categories })
        setOrder({ ...order, cityId: cities[0] })
        setLoading(false)
      }
      fetchData()
    }
  }, [])

  const onLocationChange = (location) => {
    setOrder({ ...DEFAULT_VALUES, ...location })
  }

  const onOptionsChange = (options) => setOrder({ ...order, ...options })

  const onModelChange = ({ carId }) => {
    setOrder({
      ...DEFAULT_VALUES,
      carId,
      cityId: order.cityId,
      pointId: order.pointId,
    })
  }

  const onConfirm = async () => {
    let id
    if (order.id) {
      id = await cancelOrder(order)
    } else {
      id = await sendOrder(order)
    }
    history.push(`/order/info/${id}`)
    history.go(0)
  }

  useEffect(() => {
    if (order.dateTo && order.dateFrom && order.rateId) {
      setOrder({ ...order, price: priceCalc(order) })
    }
  }, [
    order.dateFrom,
    order.dateTo,
    order.rateId,
    order.isFullTank,
    order.isNeedChildChair,
    order.isRightWheel,
  ])

  return (
    <div className="order-page">
      {loading && <Loader />}

      <Header />
      <Sidebar />
      <main className="order-page__content">
        <Breadcrumbs order={order} />

        <section className="order-page__form-wrapper">
          <Switch>
            <Route path="/order/location">
              <LocationForm
                order={order}
                cities={data.cities}
                points={data.points}
                onChange={onLocationChange}
              />
            </Route>

            {order.cityId && order.pointId && (
              <Route path="/order/model">
                <CarForm
                  order={order}
                  onChange={onModelChange}
                  cars={data.cars}
                  categories={data.categories}
                />
              </Route>
            )}

            {order.carId && (
              <Route path="/order/options">
                <OptionsForm
                  rates={data.rates}
                  order={order}
                  onChange={onOptionsChange}
                />
              </Route>
            )}

            {((order.dateFrom && order.dateTo) || order.id) && (
              <Route path={['/order/total', '/order/info/*']}>
                <Total order={order} />
              </Route>
            )}

            {!location.pathname.startsWith('/order/info') && (
              <>
                <Redirect exact from="/order" to="/order/location" />
                <Redirect from="/order/*" to="/order/location" />
              </>
            )}
          </Switch>
        </section>

        <section className="order-page__order-wrapper">
          <OrderDescription order={order} onConfirm={onConfirm} />
        </section>
      </main>
    </div>
  )
}

export default OrderPage
