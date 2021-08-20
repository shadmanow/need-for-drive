import React from 'react'

import './Total.scss'
import { formatDate } from '../../helpers/DateTimeHelper'
import {
  CONFIRMED_ORDER_STATUS_ID,
  CANCELED_ORDER_STATUS_ID,
} from '../../hooks/useApiConstants'

const Total = ({ order }) => {
  const { carId, dateFrom, orderStatusId, id } = order
  return (
    <form className="total">
      {id && (
        <>
          {orderStatusId.id === CONFIRMED_ORDER_STATUS_ID && (
            <h2 className="total__status">Ваш заказ подтвержден</h2>
          )}
          {orderStatusId.id === CANCELED_ORDER_STATUS_ID && (
            <h2 className="total__status">Ваш заказ отменен</h2>
          )}
        </>
      )}

      <section className="total__wrapper">
        <h2 className="total__model-name">{carId.name}</h2>
        {carId.number && <p className="total__model-number">{carId.number}</p>}
        {carId.tank && (
          <p className="total__model-tank">
            <strong>Топливо</strong> {carId.tank}%
          </p>
        )}
        <p className="total__model-date">
          <strong>Доступна с</strong> {`${formatDate(dateFrom)}`}
        </p>
      </section>
      <img className="total__img" src={carId.imgPath} alt={carId.name} />
    </form>
  )
}

export default Total
