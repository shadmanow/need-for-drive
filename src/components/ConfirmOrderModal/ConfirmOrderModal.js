import React from 'react'
import classNames from 'classnames'
import Button from '../Button/Button'

import './ConfirmOrderModal.scss'

const ConfirmOrderModal = ({
  isOpen,
  title,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  const classes = classNames('confirm-order-modal', {
    'confirm-order-modal_closed': !isOpen,
  })
  return (
    <div className={classes}>
      <div className="confirm-order-modal__wrapper">
        <h2>{title}</h2>
        <Button value={confirmText} onClick={() => onConfirm()} />
        <Button value={cancelText} color="red" onClick={() => onCancel()} />
      </div>
    </div>
  )
}

export default ConfirmOrderModal
