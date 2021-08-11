import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import './OrderPage.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import Order from '../../components/Order/Order'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import LocationForm from '../LocationForm/LocationForm'
import ModelForm from '../ModelForm/ModelForm'
import ExtraForm from '../ExtraForm/ExtraForm'

const OrderPage = () => {
  const [order, setOrder] = useState({
    city: '',
    point: '',
    model: null,
  })

  const onFormChange = (value) => setOrder({ ...order, ...value })

  return (
    <div className="order-page">
      <Header />
      <Sidebar />
      <main className="order-page__content">
        <Breadcrumbs />

        <section className="order-page__form-wrapper">
          <Switch>
            <Redirect exact from="/order" to="/order/location" />
            <Route path="/order/location">
              <LocationForm
                city={order.city}
                point={order.point}
                onChange={onFormChange}
              />
            </Route>
            <Route path="/order/model">
              <ModelForm model={order.model} onChange={onFormChange} />
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
