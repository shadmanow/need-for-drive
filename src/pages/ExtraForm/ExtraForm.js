import React from 'react'
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker'

import './ExtraForm.scss'
import Radio from '../../components/Radio/Radio'
import Checkbox from '../../components/Checkbox/Checkbox'

const COLORS = ['Любой', 'Красный', 'Голубой']
const TARIFFS = ['Поминутно, 7₽/мин', 'На сутки, 1999 ₽/сутки']
const SERVICES = [
  'Полный бак, 500р',
  'Детское кресло, 200р',
  'Правый руль, 1600р',
]

const ExtraForm = ({ order, onChange }) => {
  const onServicesChange = (service) => {
    let services = []
    if (order.services.includes(service)) {
      services = order.services.filter((serv) => serv !== service)
    } else {
      services = order.services
      services.push(service)
    }
    onChange({ services })
  }

  return (
    <form className="form">
      <section className="form__section">
        <h2 className="form__title">Цвет</h2>
        {COLORS.map((color, index) => (
          <Radio
            key={`${color}-${index}`}
            label={color}
            value={color}
            checked={order.color ? color === order.color : color === COLORS[0]}
            onClick={(color) => onChange({ color })}
          />
        ))}
      </section>

      <section className="form__section form__section_column">
        <h2 className="form__title">Дата аренды</h2>
        <DateTimePicker
          label="C"
          date={order.startDate}
          onChange={(startDate) => onChange({ startDate })}
        />
        <DateTimePicker
          label="По"
          date={order.endDate}
          onChange={(endDate) => onChange({ endDate })}
        />
      </section>

      <section className="form__section form__section_column">
        <h2 className="form__title">Тариф</h2>
        {TARIFFS.map((item, index) => {
          const tariff = item.substr(0, item.indexOf(','))
          return (
            <Radio
              key={`${item}-${index}`}
              label={item}
              value={tariff}
              checked={tariff === order.tariff}
              onClick={(tariff) => onChange({ tariff })}
            />
          )
        })}
      </section>

      <section className="form__section form__section_column">
        <h2 className="form__title">Доп. услуги</h2>
        {SERVICES.map((service, index) => {
          const serv = service.substr(0, service.indexOf(','))
          return (
            <Checkbox
              key={`${service}-${index}`}
              label={service}
              value={serv}
              checked={order.services.includes(serv)}
              onClick={onServicesChange}
            />
          )
        })}
      </section>
    </form>
  )
}

export default ExtraForm
