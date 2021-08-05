import React, { useState, useEffect } from 'react'

import './Select.scss'
import { ReactComponent as ClearIcon } from '../../assets/images/svg/close.svg'
import Dropdown from './Dropdown'

const Select = ({
  value,
  label,
  placeholder,
  onSelect,
  items = [],
  disabled,
}) => {
  const [curValue, setCurValue] = useState('')
  const [open, setOpen] = useState(false)
  const [changed, setChanged] = useState(false)
  const [scrollTo, setScrollTo] = useState(0)

  useEffect(() => setCurValue(value), [value])

  useEffect(() => {
    if (curValue.length >= 2 && changed) {
      if (!open) setOpen(true)

      const index = items.findIndex((item) => item.startsWith(value))
      if (index >= 0) setScrollTo(index)
    }
  }, [curValue])

  const onChangeValue = (e) => {
    if (!changed) setChanged(true)
    setCurValue(e.target.value)
  }

  const onSelectValue = (i) => {
    setChanged(false)
    setOpen(false)
    setCurValue(items[i])
    onSelect(items[i])
  }

  const onClear = () => {
    setChanged(false)
    setOpen(false)
    setCurValue('')
    onSelect('')
  }

  const onBlur = () => {
    const timeout = setTimeout(() => {
      setChanged(false)
      setOpen(false)
    }, 200)
    return () => clearTimeout(timeout)
  }

  return (
    <div className="select">
      {label && <label className="select__label">{label}</label>}
      <input
        className="select__input"
        type="text"
        value={curValue}
        placeholder={placeholder}
        onChange={onChangeValue}
        disabled={disabled}
        onBlur={onBlur}
      />

      {!!curValue.length && (
        <ClearIcon className="select__clear-icon" onClick={onClear} />
      )}

      <Dropdown
        isOpen={open}
        items={items}
        onSelect={onSelectValue}
        scrollTo={scrollTo}
      />
    </div>
  )
}

export default Select
