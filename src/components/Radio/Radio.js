import React from 'react'

import './Radio.scss'

const Radio = ({ label, value, checked, onClick }) => {
  return (
    <div className="radio" onClick={() => onClick(value)}>
      <input
        className="radio__input"
        type="radio"
        value={value}
        checked={checked}
        onChange={() => {
          /* Заглушка */
        }}
      />
      {label && <label className="radio__label">{label}</label>}
    </div>
  )
}

export { Radio }
