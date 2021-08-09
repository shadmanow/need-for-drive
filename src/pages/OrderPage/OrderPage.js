import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './OrderPage.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import Order from '../../components/Order/Order'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import LocationForm from '../LocationForm/LocationForm'
import ModelForm from '../ModelForm/ModelForm'
import ExtraForm from '../ExtraForm/ExtraForm'
import useApi from '../../hooks/useApi'
import Loader from '../../components/Loader/Loader'

const OrderPage = () => {
  const [citiesReq, citiesReqLoading] = useApi('/db/city')
  const [pointsReq, pointsReqLoading] = useApi('/db/point')
  const [modelsReq, modelsReqLoading] = useApi('/db/car')

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

  /* eslint-disable */
  useEffect(() => {
    citiesReq
      .get()
      .then(({ data }) => setCities(data))
      .catch((error) => console.error(error))

    pointsReq
      .get()
      .then(({ data }) => setPoints(data))
      .catch((error) => console.error(error))

    modelsReq
      .get('?limit=30')
      .then(({ data }) => setModels(data))
      .catch((error) => console.error(error))
  }, [])
  /* eslint-enable */

  return (
    <div className="order-page">
      {(citiesReqLoading || pointsReqLoading || modelsReqLoading) && <Loader />}

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
          <Order order={order} />
        </section>
      </main>
    </div>
  )
}

export default OrderPage
