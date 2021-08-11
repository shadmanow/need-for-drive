import React from 'react'
import './Checkbox.scss'

const Checkbox = ({ label, value, checked, onClick }) => {
  return (
    <div className="checkbox" onClick={() => onClick(value)}>
      <input
        className="checkbox__input"
        type="checkbox"
        value={value}
        checked={checked}
        onChange={() => {
          /* Заглушка */
        }}
      />
      {label && <label className="checkbox__label">{label}</label>}
    </div>
  )
}

export default Checkbox
