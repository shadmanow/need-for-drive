import React, { useState } from 'react'
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker'

import './ExtraForm.scss'
import Radio from '../../components/Radio/Radio'
import Checkbox from '../../components/Checkbox/Checkbox'

const colorValues = ['Любой', 'Красный', 'Голубой']
const tariffValues = ['Поминутно, 7₽/мин', 'На сутки, 1999 ₽/сутки']
const serviceValues = [
  'Полный бак, 500р',
  'Детское кресло, 200р',
  'Правый руль, 1600р',
]

const ExtraForm = ({ order, onChange }) => {
  const [form, setForm] = useState({
    startDate: order.startDate ? order.startDate : null,
    endDate: order.endDate ? order.endDate : null,
    color: order.color ? order.color : colorValues[0],
    tariff: order.tariff
      ? order.tariff
      : tariffValues[0].substr(0, tariffValues[0].indexOf(',')),
    services: order.services ? order.services : [],
  })

  const onFormChange = (obj) => {
    setForm({ ...form, ...obj })
    onChange({ ...obj })
  }

  const onServicesChange = (service) => {
    let services = []
    if (form.services.includes(service)) {
      services = form.services.filter((serv) => serv !== service)
    } else {
      services = form.services
      services.push(service)
    }
    setForm({ ...form, services })
    onChange({ services })
  }

  return (
    <form className="form">
      <section className="form__section">
        <h2 className="form__title">Цвет</h2>
        {colorValues.map((color, index) => (
          <Radio
            key={`${color}-${index}`}
            label={color}
            value={color}
            checked={color === form.color}
            onClick={(color) => onFormChange({ color })}
          />
        ))}
      </section>

      <section className="form__section form__section_column">
        <h2 className="form__title">Дата аренды</h2>
        <DateTimePicker
          label="C"
          date={form.startDate}
          onChange={(startDate) => onFormChange({ startDate })}
        />
        <DateTimePicker
          label="По"
          date={form.endDate}
          onChange={(endDate) => onFormChange({ endDate })}
        />
      </section>

      <section className="form__section form__section_column">
        <h2 className="form__title">Тариф</h2>
        {tariffValues.map((tariff, index) => {
          const tarf = tariff.substr(0, tariff.indexOf(','))
          return (
            <Radio
              key={`${tariff}-${index}`}
              label={tariff}
              value={tarf}
              checked={tarf === form.tariff}
              onClick={(tariff) => onFormChange({ tariff })}
            />
          )
        })}
      </section>

      <section className="form__section form__section_column">
        <h2 className="form__title">Доп. услуги</h2>
        {serviceValues.map((service, index) => {
          const serv = service.substr(0, service.indexOf(','))
          return (
            <Checkbox
              key={`${service}-${index}`}
              label={service}
              value={serv}
              checked={form.services.includes(serv)}
              onClick={onServicesChange}
            />
          )
        })}
      </section>
    </form>
  )
}

export default ExtraForm
