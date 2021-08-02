import React from 'react'

import './Order.scss'
import Button from '../Button/Button'

const Order = () => {
  return (
    <section className="order">
      <h2 className="order__title">Ваш заказ:</h2>
      <p className="order__point">
        <span>Пункт выдачи</span>
        <span />
        <span>Ульяновск, Нариманова 42</span>
      </p>
      <p className="order__price">
        <strong>Цена: </strong>
        <span>от 8 000 до 12 000 ₽</span>
      </p>
      <Button value="Выбрать модель" disabled={true} />
    </section>
  )
}

export default Order
