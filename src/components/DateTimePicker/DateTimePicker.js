import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ru from 'date-fns/locale/ru'

import './DateTimePicker.scss'

const DateTimePicker = ({ label, date, fromDate, onChange }) => {
  const [from, setFrom] = useState(new Date())

  useEffect(() => {
    if (fromDate) {
      setFrom(fromDate)
    }
  }, [fromDate])

  const onDatePickerChange = (date) => {
    if (date) {
      const currentDate = new Date()
      if (date < currentDate) {
        let hours = currentDate.getHours()
        if (currentDate.getMinutes() > 0) hours += 1
        date.setHours(hours)
      }
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
        className="datetime-picker-input"
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
