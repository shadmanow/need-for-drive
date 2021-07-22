import React from 'react';
import './Button.scss';

const Button = (props) => {
  const {
    value,
    color = 'default',
    disabled = false,
    className = ''
  } = props;

  return (
    <button
      className={`button button_color-${color} ${className}`}
      disabled={disabled}
    >
      { value }
    </button>
  )
};

export {Button}