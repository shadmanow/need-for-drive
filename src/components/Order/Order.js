import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import './Order.scss'
import Button from '../Button/Button'

const Order = ({ order }) => {
  const { city, point, model, color, startDate, endDate, tariff, services } =
    order

  const interval = {
    days: Math.round((endDate - startDate) / 1000 / 60 / 60 / 24),
    hours: Math.round(((endDate - startDate) / 1000 / 60 / 60) % 24),
    minutes: Math.round(((endDate - startDate) / 1000 / 60) % 60),
  }

  const { pathname } = useLocation()
  const history = useHistory()

  return (
    <section className="order">
      <h2 className="order__title">Ваш заказ:</h2>

      <p className="order__item">
        <span>Пункт выдачи</span>
        <span />
        <span>
          {city},<br />
          {point}
        </span>
      </p>

      {!!model && (
        <p className="order__item">
          <span>Модель</span>
          <span />
          <span>{model.name}</span>
        </p>
      )}

      {!!color && (
        <p className="order__item">
          <span>Цвет</span>
          <span />
          <span>{color}</span>
        </p>
      )}

      {!!(startDate && endDate && endDate > startDate) && (
        <p className="order__item">
          <span>Длительность аренды</span>
          <span />
          <span>
            {interval.days > 0 && `${interval.days}д `}
            {interval.hours > 0 && `${interval.hours}ч `}
            {interval.minutes > 0 && `${interval.minutes}м`}
          </span>
        </p>
      )}

      {!!tariff && (
        <p className="order__item">
          <span>Тариф</span>
          <span />
          <span>{tariff}</span>
        </p>
      )}

      {!!services &&
        services.map((service, index) => (
          <p className="order__item" key={`${service}-${index}`}>
            <span>{service}</span>
            <span />
            <span>Да</span>
          </p>
        ))}

      <p className="order__price">
        <strong>Цена: </strong>
        <span>от 8 000 до 12 000 ₽</span>
      </p>

      {pathname === '/order/location' && (
        <Button
          value="Выбрать модель"
          disabled={!city && !point}
          onClick={() => history.push('/order/model')}
        />
      )}
      {pathname === '/order/model' && (
        <Button
          value="Дополнительно"
          disabled={!model}
          onClick={() => history.push('/order/extra')}
        />
      )}
      {pathname === '/order/extra' && <Button value="Итого" />}
    </section>
  )
}

export default Order