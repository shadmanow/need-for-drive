import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './OrderPage.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import OrderDescription from '../../components/OrderDescription/OrderDescription'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import LocationForm from '../LocationForm/LocationForm'
import ModelForm from '../ModelForm/ModelForm'
import ExtraForm from '../ExtraForm/ExtraForm'
import useApi from '../../hooks/useApi'
import Loader from '../../components/Loader/Loader'

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
    color: null,
    tariff: null,
    services: [],
  })

  const onFormChange = (value) => setOrder({ ...order, ...value })

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
        <Breadcrumbs />

        <section className="order-page__form-wrapper">
          <Switch>
            <Redirect exact from="/order" to="/order/location" />
            <Route path="/order/location">
              {!!cities.length && !!points.length && (
                <LocationForm
                  city={order.city}
                  point={order.point}
                  cities={cities}
                  points={points}
                  onChange={onFormChange}
                />
              )}
            </Route>
            <Route path="/order/model">
              {!!models.length && (
                <ModelForm
                  model={order.model}
                  onChange={onFormChange}
                  models={models}
                />
              )}
            </Route>
            <Route path="/order/extra">
              <ExtraForm order={order} onChange={onFormChange} />
            </Route>
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
