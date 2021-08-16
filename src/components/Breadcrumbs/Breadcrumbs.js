import React from 'react'

import './Breadcrumbs.scss'
import BreadcrumbsLink from './BreadcrumbsLink'

const Breadcrumbs = ({ order }) => {
  const { cityId, pointId, carId, rateId, dateFrom, dateTo, price } = order

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
            disabled={!cityId || !pointId}
          />
          <BreadcrumbsLink
            name="Дополнительно"
            to="/order/options"
            disabled={!carId}
          />
          <BreadcrumbsLink
            name="Итого"
            to="/order/total"
            disabled={
              !dateFrom ||
              !dateTo ||
              !rateId ||
              !(carId && (carId.priceMin > price || carId.priceMax < price))
            }
          />
        </>
      )}
    </section>
  )
}

export default Breadcrumbs
