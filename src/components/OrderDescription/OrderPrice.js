import React from 'react'
import classNames from 'classnames'

const OrderPrice = ({ carId, price, pathname }) => {
  const priceClasses = classNames('order__curprice', {
    order__curprice_success:
      price >= carId?.priceMin && price <= carId?.priceMax,
    order__curprice_fail: price >= carId?.priceMax || price <= carId?.priceMin,
  })
  return (
    <p className="order__price">
      <strong>Цена: </strong>
      <span>
        {pathname.startsWith('/order/info') || pathname === '/order/total' ? (
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
  )
}

export default OrderPrice
