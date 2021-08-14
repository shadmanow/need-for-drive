import React from 'react'

import './Total.scss'
import { formatDate } from '../../helpers/DateTimeHelper'

const Total = ({ order }) => {
  const { carId, dateFrom } = order
  return (
    <div className="total-tab">
      <section className="total-tab__wrapper">
        {order.id && (
          <h2 className="total-tab__confirmed">Ваш заказ подтвержден</h2>
        )}
        <h2 className="total-tab__model-name">{carId.name}</h2>
        <p className="total-tab__model-number">{carId.number}</p>
        <p className="total-tab__model-tank">
          <strong>Топливо</strong> {carId.tank}%
        </p>
        <p className="total-tab__model-date">
          <strong>Доступна с</strong> {`${formatDate(dateFrom)}`}
        </p>
      </section>
      <img className="total-tab__img" src={carId.imgPath} alt={carId.name} />
    </div>
  )
}

export default Total
