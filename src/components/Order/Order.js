import React from 'react'

import './Order.scss'
import { Button } from '../Button/Button'

const Order = ({ model }) => {
  return (
    <section className="order">
      <h2 className="order__title">Ваш заказ:</h2>
      <p className="order__item">
        <span>Пункт выдачи</span>
        <span />
        <span>Ульяновск, Нариманова 42</span>
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
      {!model && <Button value="Выбрать модель" disabled={true} />}
      {model && <Button value="Дополнительно" disabled={true} />}
    </section>
  )
}

export { Order }
