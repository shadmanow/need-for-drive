import React, { useState, useEffect } from 'react'

import './Select.scss'
import { ReactComponent as Remove } from '../../assets/images/svg/close.svg'
import { Dropdown } from './Dropdown'

const Select = ({
  label,
  value,
  placeholder,
  onChange,
  items,
  disabled = false,
}) => {
  const [_items, _setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isChanged, setIsChanged] = useState(false)
  const [scrollTo, setScrollTo] = useState(0)

  useEffect(() => _setItems(items.sort()), [items])

  useEffect(() => {
    setIsOpen(value.length >= 2 && isChanged)
  }, [value, isChanged])

  useEffect(() => {
    if (isOpen) {
      const itemIndex = _items.findIndex((item) => item[0] === value[0])
      if (itemIndex >= 0) setScrollTo(itemIndex)
    }
  }, [isOpen, _items, value])

  const onValueChange = (e) => {
    setIsChanged(true)
    onChange(e.target.value)
  }

  const onValueSelect = (i) => {
    setIsChanged(false)
    setIsOpen(false)
    onChange(_items[i])
  }

  return (
    <div className="select" tabIndex="0">
      {label && <label className="select__label">{label}</label>}

      <input
        className="select__input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onValueChange}
        disabled={disabled}
      />

      {value.length ? (
        <Remove className="select__clear-icon" onClick={() => onChange('')} />
      ) : null}

      <Dropdown
        isOpen={isOpen}
        items={_items}
        onClick={onValueSelect}
        scrollTo={scrollTo}
      />
    </div>
  )
}

export { Select }
