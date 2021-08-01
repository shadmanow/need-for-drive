import React from 'react'
import cn from 'classnames'
import './Button.scss'

const Button = ({ value, color = 'default', disabled, className, onClick }) => {
  const classes = cn('button', [`button_color-${color}`], className)
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {value}
    </button>
  )
}

export { Button }
