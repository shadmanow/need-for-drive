import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './OrderPage.scss'
import { DEFAULT_VALUES } from './OrderPageConstats'
import costCalc from './CostCalculator'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import OrderDescription from '../../components/OrderDescription/OrderDescription'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import LocationForm from '../LocationForm/LocationForm'
import ModelForm from '../ModelForm/ModelForm'
import OptionsForm from '../OptionsForm/OptionsForm'
import useApi from '../../hooks/useApi'
import Loader from '../../components/Loader/Loader'
import Total from '../Total/Total'

const OrderPage = () => {
  const { fetchCitiesAndPoints, fetchCars, fetchRates } = useApi()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    cities: [],
    rates: [],
    points: [],
    cars: [],
  })
  const [order, setOrder] = useState(DEFAULT_VALUES)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const { cities, points } = await fetchCitiesAndPoints()
      const cars = await fetchCars('?limit=30')
      const rates = await fetchRates()
      setData({ cities, points, cars, rates })
      setLoading(false)
    }
    fetchData()
  }, [])

  const onLocationChange = (location) => setOrder({ ...location })
  const onModelChange = ({ model }) => {
    const { city, point } = order
    setOrder({
      ...DEFAULT_VALUES,
      model,
      city,
      point,
    })
  }
  const onOptionsChange = (options) => setOrder({ ...order, ...options })

  useEffect(() => {
    if (order.startDate && order.endDate && order.rate) {
      setOrder({ ...order, price: costCalc(order) })
    }
  }, [
    order.startDate,
    order.endDate,
    order.rate,
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
              {!!(data.cities.length && data.points.length) && (
                <LocationForm
                  city={order.city}
                  point={order.point}
                  cities={data.cities}
                  points={data.points}
                  onChange={onLocationChange}
                />
              )}
            </Route>

            {order.city && order.point && (
              <Route path="/order/model">
                {!!data.cars.length && (
                  <ModelForm
                    model={order.model}
                    onChange={onModelChange}
                    models={data.cars}
                  />
                )}
              </Route>
            )}

            {order.model && (
              <Route path="/order/options">
                <OptionsForm
                  rates={data.rates}
                  order={order}
                  onChange={onOptionsChange}
                />
              </Route>
            )}

            {order.startDate && order.endDate && (
              <Route>
                <Total order={order} />
              </Route>
            )}

            <Redirect exact from="/order" to="/order/location" />
            <Redirect from="/order/*" to="/order/location" />
          </Switch>
        </section>

        <section className="order-page__order-wrapper">
          <OrderDescription order={order} />
        </section>
      </main>
    </div>
  )
}

export default OrderPage
