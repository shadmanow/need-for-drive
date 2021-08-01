import React, { useState } from 'react'

import './OrderPage.scss'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Header } from '../../components/Header/Header'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Order } from '../../components/Order/Order'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { ChoiceLocationForm } from '../ChoiceLocationForm/ChoiceLocationForm'
import { ChoiceModelForm } from '../ChoiceModelForm/ChoiceModelForm'

const OrderPage = () => {
  const [order, setOrder] = useState({
    city: '',
    point: '',
    model: '30N1',
  })

  const onFormChange = (value) => setOrder({ ...order, ...value })

  return (
    <div className="order-page">
      <Header />
      <Sidebar />
      <main className="order-page__content">
        <Breadcrumbs />

        <div className="order-page__form-wrapper">
          <Switch>
            <Redirect exact from="/order" to="/order/location" />
            <Route path="/order/location">
              <ChoiceLocationForm
                city={order.city}
                point={order.point}
                onChange={onFormChange}
              />
            </Route>
            <Route path="/order/model">
              <ChoiceModelForm model={order.model} />
            </Route>
          </Switch>
        </div>

        <section className="order-page__order-wrapper">
          <Order model={order.model} />
        </section>
      </main>
    </div>
  )
}

export { OrderPage }
