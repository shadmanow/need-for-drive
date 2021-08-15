import React from 'react'

import './Total.scss'
import { formatDate } from '../../helpers/DateTimeHelper'

const Total = ({ order }) => {
  const { carId, dateFrom, id } = order
  return (
    <form className="total">
      <section className="total__wrapper">
        {id && <h2 className="total__status">Ваш заказ подтвержден</h2>}
        <h2 className="total__model-name">{carId.name}</h2>
        <p className="total__model-number">{carId.number}</p>
        <p className="total__model-tank">
          <strong>Топливо</strong> {carId.tank}%
        </p>
        <p className="total__model-date">
          <strong>Доступна с</strong> {`${formatDate(dateFrom)}`}
        </p>
      </section>
      <img className="total__img" src={carId.imgPath} alt={carId.name} />
    </form>
  )
}

export default Total
