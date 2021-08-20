import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ru from 'date-fns/locale/ru'

import './DateTimePicker.scss'

const DateTimePicker = ({ label, date, fromDate, onChange, error }) => {
  const [from, setFrom] = useState(new Date())

  const inputClasses = classNames('datetime-picker-input', {
    'datetime-picker-input_error': error,
  })

  useEffect(() => {
    if (fromDate) {
      setFrom(fromDate)
    }
  }, [fromDate])

  const onDatePickerChange = (date) => {
    if (date && date < from) {
      date.setHours(from.getHours() + 1)
    }
    onChange(date)
  }

  const isPastTime = (time) => {
    return from.getTime() < new Date(time).getTime()
  }

  return (
    <div className="datetime-picker">
      {label && <label className="datetime-picker__label">{label}</label>}
      <DatePicker
        locale={ru}
        selected={date}
        className={inputClasses}
        calendarClassName="datetime-picker-calendar"
        onChange={onDatePickerChange}
        dateFormat="dd.MM.yyyy HH:mm"
        minDate={from}
        showTimeSelect
        filterTime={isPastTime}
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="Время"
        isClearable
        shouldCloseOnSelect={false}
      />
    </div>
  )
}

export default DateTimePicker
