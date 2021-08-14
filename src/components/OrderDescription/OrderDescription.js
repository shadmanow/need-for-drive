import React, { useState } from 'react'
import classNames from 'classnames'
import { useLocation, useHistory } from 'react-router-dom'

import './OrderDescription.scss'
import { getDays, getHours, getMinutes } from '../../helpers/DateTimeHelper'
import Button from '../Button/Button'
import ConfirmOrderModal from '../ConfirmOrderModal/ConfirmOrderModal'
import useApi from '../../hooks/useApi'

const OrderDescription = ({ order }) => {
  const { sendOrder } = useApi()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const history = useHistory()
  const { pathname } = useLocation()
  const {
    cityId,
    pointId,
    carId,
    color,
    dateFrom,
    dateTo,
    rateId,
    price,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
  } = order

  const leaseDuration = {
    days: getDays(dateFrom, dateTo),
    hours: getHours(dateFrom, dateTo),
    minutes: getMinutes(dateFrom, dateTo),
  }

  const priceClasses = classNames('order__curprice', {
    order__curprice_success:
      price && carId && price >= carId.priceMin && price <= carId.priceMax,
    order__curprice_fail:
      price && carId && (price >= carId.priceMax || price <= carId.priceMin),
  })

  const handleConfirm = async () => {
    const id = await sendOrder(order)
    history.push(`/order/${id}`)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="order">
      <h2 className="order__title">Ваш заказ:</h2>

      <p className="order__item">
        <span>Пункт выдачи</span>
        <span />
        <span>
          {cityId && cityId.name},<br />
          {pointId && pointId.name}
        </span>
      </p>

      {!!carId && (
        <p className="order__item">
          <span>Модель</span>
          <span />
          <span>{carId.name}</span>
        </p>
      )}

      {!!color && (
        <p className="order__item">
          <span>Цвет</span>
          <span />
          <span>{color}</span>
        </p>
      )}

      {!!(dateFrom && dateTo && dateTo > dateFrom) && (
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

      {!!rateId && (
        <p className="order__item">
          <span>Тариф</span>
          <span />
          <span>{rateId.name}</span>
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
        {carId && (
          <span>
            {pathname !== '/order/total' && !order.id ? (
              <>
                от {carId.priceMin} до {carId.priceMax}₽{' '}
                {price && <span className={priceClasses}>({price}₽)</span>}
              </>
            ) : (
              <>
                <span>{price}₽</span>
              </>
            )}
          </span>
        )}
      </p>

      {pathname === '/order/location' && (
        <Button
          value="Выбрать модель"
          disabled={!cityId || !pointId}
          onClick={() => history.push('/order/model')}
        />
      )}
      {pathname === '/order/model' && (
        <Button
          value="Дополнительно"
          disabled={!carId}
          onClick={() => history.push('/order/options')}
        />
      )}
      {pathname === '/order/options' && (
        <Button
          value="Итого"
          disabled={!(dateFrom && dateTo && dateTo > dateFrom)}
          onClick={() => history.push('/order/total')}
        />
      )}
      {pathname === '/order/total' && (
        <Button value="Заказать" onClick={() => setIsModalOpen(true)} />
      )}
      <ConfirmOrderModal
        title="Подтвердить заказ"
        confirmText="Подтвердить"
        cancelText="Вернуться"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        isOpen={isModalOpen}
      />
    </section>
  )
}

export default OrderDescription
