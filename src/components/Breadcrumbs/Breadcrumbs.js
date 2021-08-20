import React from 'react'
import { getNumbers } from '../../helpers/StringHelper'

import './Breadcrumbs.scss'
import BreadcrumbsLink from './BreadcrumbsLink'

const Breadcrumbs = ({ order }) => {
  const { cityId, pointId, carId, rateId, dateFrom, dateTo, price, id } = order

  return (
    <section className="breadcrumbs">
      {id ? (
        <span className="breadcrumbs__order-number">Заказ номер {id}</span>
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
              !(carId && carId.priceMin <= price && carId.priceMax >= price)
            }
          />
        </>
      )}
    </section>
  )
}

export default Breadcrumbs
