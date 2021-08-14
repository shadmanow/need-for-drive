import React from 'react'
import classNames from 'classnames'
import { useLocation, useHistory } from 'react-router-dom'

import './OrderDescription.scss'
import { getDays, getHours, getMinutes } from '../../helpers/DateTimeHelper'
import Button from '../Button/Button'

const OrderDescription = ({ order }) => {
  const history = useHistory()
  const { pathname } = useLocation()
  const {
    city,
    point,
    model,
    color,
    startDate,
    endDate,
    rate,
    price,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
  } = order

  const leaseDuration = {
    days: getDays(startDate, endDate),
    hours: getHours(startDate, endDate),
    minutes: getMinutes(startDate, endDate),
  }

  const priceClasses = classNames('order__curprice', {
    order__curprice_success:
      price && model && price >= model.priceMin && price <= model.priceMax,
    order__curprice_fail:
      price && model && (price >= model.priceMax || price <= model.priceMin),
  })

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

      {!!rate && (
        <p className="order__item">
          <span>Тариф</span>
          <span />
          <span>{rate.name}</span>
        </p>
      )}

      {!!isFullTank && (
        <p className="order__item">
          <span>Полный бак</span>
          <span />
          <span>Да</span>
        </p>
      )}

      {!!isNeedChildChair && (
        <p className="order__item">
          <span>Детское кресло</span>
          <span />
          <span>Да</span>
        </p>
      )}

      {!!isRightWheel && (
        <p className="order__item">
          <span>Правый руль</span>
          <span />
          <span>Да</span>
        </p>
      )}

      <p className="order__price">
        <strong>Цена: </strong>
        {model && (
          <span>
            от {model.priceMin} до {model.priceMax}₽{' '}
            {price && <span className={priceClasses}>({price}₽)</span>}
          </span>
        )}
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
