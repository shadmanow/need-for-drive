import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import './OrderDescription.scss'
import { getDays, getHours } from '../../helpers/DateTimeHelper'
import Button from '../Button/Button'
import ConfirmOrderModal from '../ConfirmOrderModal/ConfirmOrderModal'
import OrderItem from './OrderItem'
import OrderPrice from './OrderPrice'
import { CANCELED_ORDER_STATUS_ID } from '../../hooks/useApiConstants'

const OrderDescription = ({ order, onConfirm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    orderStatusId,
    id,
  } = order

  const leaseDuration = {
    days: getDays(dateFrom, dateTo),
    hours: getHours(dateFrom, dateTo),
  }

  const handleConfirm = async () => {
    setIsModalOpen(false)
    onConfirm()
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

      <OrderPrice carId={carId} price={price} pathname={pathname} />

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

      {id && orderStatusId.id !== CANCELED_ORDER_STATUS_ID && (
        <Button
          value="Отменить заказ"
          color="red"
          onClick={() => setIsModalOpen(true)}
        />
      )}

      <ConfirmOrderModal
        title={order.id ? 'Отменить заказ' : 'Подтвердить заказ'}
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
