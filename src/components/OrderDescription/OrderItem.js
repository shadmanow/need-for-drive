import React from 'react'

const OrderItem = ({ name, value }) => {
  return (
    <p className="order__item">
      <span>{name}</span>
      <span />
      <span>{value}</span>
    </p>
  )
}

export default OrderItem
