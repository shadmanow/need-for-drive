import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import './Select.scss'
import { ReactComponent as ClearIcon } from '../../assets/images/svg/close.svg'
import { Dropdown } from './Dropdown'

const Select = ({ label, placeholder, onSelect, items = [], disabled }) => {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  const [changed, setChanged] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [scrollTo, setScrollTo] = useState(0)

  const inputClasses = cn('select__input', {
    select__input_error: error,
    select__input_success: success,
  })

  useEffect(() => {
    if (value.length >= 2 && changed) {
      setOpen(true)
      const index = items.findIndex((item) => item.startsWith(value))
      if (index >= 0) setScrollTo(index)
    }
  }, [value])

  useEffect(() => {
    if (value) {
      const timeout = setTimeout(() => {
        const item = items.find((item) => item === value)
        if (item) {
          setSuccess(true)
          setError(false)
          onSelect(item)
        } else {
          setSuccess(false)
          setError(true)
        }
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [value])

  const onChangeValue = (e) => {
    setChanged(true)
    setSuccess(false)
    setError(false)
    setValue(e.target.value)
  }

  const onSelectValue = (i) => {
    setChanged(false)
    setOpen(false)
    setValue(items[i])
    onSelect(items[i])
  }

  const onClear = () => {
    setChanged(false)
    setOpen(false)
    setSuccess(false)
    setError(false)
    setValue('')
    onSelect('')
  }

  return (
    <div className="select">
      {label && <label className="select__label">{label}</label>}

      <input
        className={inputClasses}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChangeValue}
        disabled={disabled}
      />

      {value.length ? (
        <ClearIcon className="select__clear-icon" onClick={onClear} />
      ) : null}

      <Dropdown
        isOpen={open}
        items={items}
        onSelect={onSelectValue}
        scrollTo={scrollTo}
      />
    </div>
  )
}

export { Select }
