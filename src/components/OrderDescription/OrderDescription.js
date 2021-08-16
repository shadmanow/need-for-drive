import React, { useState } from 'react'
import classNames from 'classnames'
import { useLocation, useHistory } from 'react-router-dom'

import './OrderDescription.scss'
import { getDays, getHours } from '../../helpers/DateTimeHelper'
import Button from '../Button/Button'
import ConfirmOrderModal from '../ConfirmOrderModal/ConfirmOrderModal'
import useApi from '../../hooks/useApi'
import OrderItem from './OrderItem'

const OrderDescription = ({ order }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { sendOrder } = useApi()
  const { pathname } = useLocation()
  const history = useHistory()

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
  }

  const priceClasses = classNames('order__curprice', {
    order__curprice_success:
      price >= carId?.priceMin && price <= carId?.priceMax,
    order__curprice_fail: price >= carId?.priceMax || price <= carId?.priceMin,
  })

  const handleConfirm = async () => {
    setIsModalOpen(false)
    const id = await sendOrder(order)
    history.push(`/order/info/${id}`)
  }

  const handleCancel = () => setIsModalOpen(false)

  return (
    <section className="order">
      <h2 className="order__title">Ваш заказ:</h2>

      <OrderItem
        name="Пункт выдачи"
        value={
          <>
            {cityId?.name},<br />
            {pointId?.address}
          </>
        }
      />

      {!!carId && <OrderItem name="Модель" value={carId.name} />}
      {!!color && <OrderItem name="Цвет" value={color} />}

      {!!(dateTo > dateFrom) && (
        <OrderItem
          name="Длительность аренды"
          value={
            <>
              {leaseDuration.days > 0 && `${leaseDuration.days}д `}
              {leaseDuration.hours > 0 && `${leaseDuration.hours}ч `}
            </>
          }
        />
      )}

      {!!rateId && <OrderItem name="Тариф" value={rateId.name} />}
      {isFullTank && <OrderItem name="Полный бак" value="Да" />}
      {isNeedChildChair && <OrderItem name="Детское кресло" value="Да" />}
      {isRightWheel && <OrderItem name="Правый руль" value="Да" />}

      <p className="order__price">
        <strong>Цена: </strong>
        <span>
          {pathname === '/order/total' ? (
            <span>{price}₽</span>
          ) : (
            <>
              {carId && (
                <>
                  от {carId.priceMin} до {carId.priceMax}₽{' '}
                </>
              )}
              {!!price && <span className={priceClasses}>({price}₽)</span>}
            </>
          )}
        </span>
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
          disabled={
            !(
              dateTo > dateFrom &&
              price >= carId.priceMin &&
              price <= carId.priceMax
            )
          }
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
