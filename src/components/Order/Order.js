import React from 'react'
import { useLocation } from 'react-router-dom'

import './Order.scss'
import { Button } from '../Button/Button'

const Order = ({ city, point, model }) => {
  const { pathname } = useLocation()
  return (
    <section className="order">
      <h2 className="order__title">Ваш заказ:</h2>
      <p className="order__item">
        <span>Пункт выдачи</span>
        <span />
        <span>
          {city}, {point}
        </span>
      </p>

      {model ? (
        <p className="order__item">
          <span>Модель</span>
          <span />
          <span>{model}</span>
        </p>
      ) : null}

      <p className="order__price">
        <strong>Цена: </strong>
        <span>от 8 000 до 12 000 ₽</span>
      </p>
      {pathname === '/order/location' && (
        <Button value="Выбрать модель" disabled={!city && !point} />
      )}
      {pathname === '/order/model' && (
        <Button value="Дополнительно" disabled={!model} />
      )}
    </section>
  )
}

export { Order }
