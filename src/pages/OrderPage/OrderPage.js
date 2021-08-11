import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './OrderPage.scss'
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
  const { fetchCitiesAndPoints, fetchCars } = useApi()
  const [loading, setLoading] = useState(false)
  const [cities, setCities] = useState([])
  const [points, setPoints] = useState([])
  const [models, setModels] = useState([])

  const [order, setOrder] = useState({
    city: 'Ульяновск',
    point: '',
    model: null,
    color: 'Любой',
    tariff: 'На сутки',
    services: [],
  })

  const onLocationChange = (location) => setOrder({ ...location })
  const onOptionsChange = (options) => setOrder({ ...order, ...options })
  const onModelChange = ({ model }) => {
    const { city, point } = order
    setOrder({
      model,
      city,
      point,
      color: 'Любой',
      tariff: 'На сутки',
      services: [],
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const { cities, points } = await fetchCitiesAndPoints()
      const cars = await fetchCars('?limit=30')
      setCities(cities)
      setPoints(points)
      setModels(cars)
      setLoading(false)
    }
    fetchData()
  }, [])

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
              {!!(cities.length && points.length) && (
                <LocationForm
                  city={order.city}
                  point={order.point}
                  cities={cities}
                  points={points}
                  onChange={onLocationChange}
                />
              )}
            </Route>

            {order.city && order.point && (
              <Route path="/order/model">
                {!!models.length && (
                  <ModelForm
                    model={order.model}
                    onChange={onModelChange}
                    models={models}
                  />
                )}
              </Route>
            )}

            {order.model && (
              <Route path="/order/options">
                <OptionsForm order={order} onChange={onOptionsChange} />
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
