import React from 'react'

import './Total.scss'
import { formatDate } from '../../helpers/DateTimeHelper'

const Total = ({ order }) => {
  const { model, startDate } = order
  return (
    <div className="total-tab">
      <section className="total-tab__wrapper">
        <h2 className="total-tab__model-name">{model.name}</h2>
        <p className="total-tab__model-number">{model.number}</p>
        <p className="total-tab__model-tank">
          <strong>Топливо</strong> {model.tank}%
        </p>
        <p className="total-tab__model-date">
          <strong>Доступна с</strong> {`${formatDate(startDate)}`}
        </p>
      </section>
      <img className="total-tab__img" src={model.imgPath} alt={model.name} />
    </div>
  )
}

export default Total
