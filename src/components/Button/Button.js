import React from 'react'
import cn from 'classnames'
import './Button.scss'

const Button = (props) => {
  const { value, color = 'default', disabled = false, className } = props
  const classes = cn('button', [`button_color-${color}`], className)
  return (
    <button className={classes} disabled={disabled}>
      {value}
    </button>
  )
}

export { Button }
