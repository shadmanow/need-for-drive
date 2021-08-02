import React, { useState } from 'react'

import './OrderPage.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import { Redirect, Route, Switch } from 'react-router-dom'
import Order from '../../components/Order/Order'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import ChoiceLocationForm from '../ChoiceLocationForm/ChoiceLocationForm'

const OrderPage = () => {
  const [order, setOrder] = useState({
    city: '',
    point: '',
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
              <ChoiceLocationForm
                city={order.city}
                point={order.point}
                onChange={onFormChange}
              />
            </Route>
          </Switch>
        </section>

        <section className="order-page__order-wrapper">
          <Order />
        </section>
      </main>
    </div>
  )
}

export default OrderPage
