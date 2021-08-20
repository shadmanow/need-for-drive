import React from 'react'

import './OptionsForm.scss'
import { SERVICES } from './OptionsFormConstants'
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker'
import Radio from '../../components/Radio/Radio'
import Checkbox from '../../components/Checkbox/Checkbox'

const OptionsForm = ({ rates, order, onChange }) => {
  const colors = ['Любой', ...order.carId.colors]

  return (
    <form className="form">
      <section className="form__section">
        <h2 className="form__title">Цвет</h2>
        {colors.map((color, index) => (
          <Radio
            key={`${color}-${index}`}
            label={color}
            value={color}
            checked={color === order.color}
            onClick={(color) => onChange({ color })}
          />
        ))}
      </section>

      <section className="form__section form__section_column">
        <h2 className="form__title">Дата аренды</h2>
        <DateTimePicker
          label="C"
          date={order.dateFrom}
          error={order.dateFrom >= order.dateTo}
          onChange={(dateFrom) => onChange({ dateFrom })}
        />
        <DateTimePicker
          label="По"
          date={order.dateTo}
          error={order.dateFrom >= order.dateTo}
          onChange={(dateTo) => onChange({ dateTo })}
        />
      </section>

      <section className="form__section form__section_column">
        <h2 className="form__title">Тариф</h2>
        {rates.map((rateId) => {
          return (
            <Radio
              key={rateId.id}
              label={`${rateId.name}, ${rateId.price} ₽/${rateId.unit}`}
              value={rateId.name}
              checked={order.rateId?.name === rateId.name ?? false}
              onClick={() => onChange({ rateId })}
            />
          )
        })}
      </section>

      <section className="form__section form__section_column">
        <h2 className="form__title">Доп. услуги</h2>
        {Object.entries(SERVICES).map(([key, value], index) => {
          return (
            <Checkbox
              key={`${value}-${index}`}
              label={value}
              checked={order[key]}
              onClick={() => onChange({ [key]: !order[key] })}
            />
          )
        })}
      </section>
    </form>
  )
}

export default OptionsForm
