import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import './OrderDescription.scss'
import { getDays, getHours, getMinutes } from '../../helpers/DateTimeHelper'
import Button from '../Button/Button'

const OrderDescription = ({ order }) => {
  const history = useHistory()
  const { pathname } = useLocation()
  const { city, point, model, color, startDate, endDate, tariff, services } =
    order

  const leaseDuration = {
    days: getDays(startDate, endDate),
    hours: getHours(startDate, endDate),
    minutes: getMinutes(startDate, endDate),
  }

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
            {leaseDuration.days > 0 && `${leaseDuration.days}д `}
            {leaseDuration.hours > 0 && `${leaseDuration.hours}ч `}
            {leaseDuration.minutes > 0 && `${leaseDuration.minutes}м`}
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
          disabled={!city || !point}
          onClick={() => history.push('/order/model')}
        />
      )}
      {pathname === '/order/model' && (
        <Button
          value="Дополнительно"
          disabled={!model}
          onClick={() => history.push('/order/options')}
        />
      )}
      {pathname === '/order/options' && (
        <Button
          value="Итого"
          disabled={!(startDate && endDate && endDate > startDate)}
          onClick={() => history.push('/order/total')}
        />
      )}
    </section>
  )
}

export default OrderDescription
