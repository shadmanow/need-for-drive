import React from 'react'

import './Breadcrumbs.scss'
import BreadcrumbsLink from './BreadcrumbsLink'

const Breadcrumbs = ({ order }) => {
  const { city, point, model, startDate, endDate } = order

  return (
    <section className="breadcrumbs">
      {order.id ? (
        <span className="breadcrumbs__order-number">
          Заказ номер RU58491823
        </span>
      ) : (
        <>
          <BreadcrumbsLink name="Местоположение" to="/order/location" />
          <BreadcrumbsLink
            name="Модель"
            to="/order/model"
            disabled={!city || !point}
          />
          <BreadcrumbsLink
            name="Дополнительно"
            to="/order/options"
            disabled={!model}
          />
          <BreadcrumbsLink
            name="Итого"
            to="/order/total"
            disabled={!startDate || !endDate}
          />
        </>
      )}
    </section>
  )
}

export default Breadcrumbs
