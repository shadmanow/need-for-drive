import React from 'react'
import classNames from 'classnames'
import Button from '../Button/Button'

import './ConfirmOrderModal.scss'

const ConfirmOrderModal = ({ isOpen, onConfirm, onCancel }) => {
  const classes = classNames('confirm-order-modal', {
    'confirm-order-modal_closed': !isOpen,
  })
  return (
    <div className={classes}>
      <div className="confirm-order-modal__wrapper">
        <h2>Подвердить заказ</h2>
        <Button value="Подвердить" onClick={() => onConfirm()} />
        <Button value="Вернуться" color="red" onClick={() => onCancel()} />
      </div>
    </div>
  )
}

export default ConfirmOrderModal
