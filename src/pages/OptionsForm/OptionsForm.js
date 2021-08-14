import React from 'react'

import './OptionsForm.scss'
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker'
import Radio from '../../components/Radio/Radio'
import Checkbox from '../../components/Checkbox/Checkbox'

const OptionsForm = ({ rates, order, onChange }) => {
  const colors = ['Любой', ...order.model.colors]
  return (
    <form className="form">
      <section className="form__section">
        <h2 className="form__title">Цвет</h2>
        {colors.map((color, index) => (
          <Radio
            key={`${color}-${index}`}
            label={color}
            value={color}
            checked={order.color ? color === order.color : color === colors[0]}
            onClick={(color) => onChange({ color })}
          />
        ))}
      </section>

      <section className="form__section form__section_column">
        <h2 className="form__title">Дата аренды</h2>
        <DateTimePicker
          label="C"
          date={order.dateFrom}
          onChange={(dateFrom) => onChange({ dateFrom })}
        />
        <DateTimePicker
          label="По"
          fromDate={order.dateTo}
          date={order.dateTo}
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
              checked={order.rate ? order.rate.name === rateId.name : false}
              onClick={() => onChange({ rateId })}
            />
          )
        })}
      </section>

      <section className="form__section form__section_column">
        <h2 className="form__title">Доп. услуги</h2>
        <Checkbox
          label="Полный бак, 500р"
          checked={order.isFullTank}
          onClick={() => onChange({ isFullTank: !order.isFullTank })}
        />
        <Checkbox
          label="Детское кресло, 200р"
          checked={order.isNeedChildChair}
          onClick={() =>
            onChange({ isNeedChildChair: !order.isNeedChildChair })
          }
        />
        <Checkbox
          label="Полный бак, 1600р"
          checked={order.isRightWheel}
          onClick={() => onChange({ isRightWheel: !order.isRightWheel })}
        />
      </section>
    </form>
  )
}

export default OptionsForm
