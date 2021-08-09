import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

import { ReactComponent as ClearIcon } from '../../assets/images/svg/close.svg'
import 'react-datepicker/dist/react-datepicker.css'
import './DateTimePicker.scss'

import ru from 'date-fns/locale/ru'
registerLocale('ru', ru)

const DateTimePicker = ({ label, date, onChange }) => {
  return (
    <div className="datetime-picker">
      {label && <label className="datetime-picker__label">{label}</label>}
      <DatePicker
        className="datetime-picker-input"
        calendarClassName="datetime-picker-calendar"
        selected={date}
        onChange={onChange}
        dateFormat="dd.MM.yyyy hh:mm"
        locale="ru"
        showTimeSelect
        timeCaption="Время"
        isClearable
      />
    </div>
  )
}

export default DateTimePicker
