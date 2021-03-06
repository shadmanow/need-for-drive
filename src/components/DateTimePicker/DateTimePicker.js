import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

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
        dateFormat="dd.MM.yyyy HH:mm"
        locale="ru"
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="Время"
        isClearable
      />
    </div>
  )
}

export default DateTimePicker
