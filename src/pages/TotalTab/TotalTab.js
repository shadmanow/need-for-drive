import React from 'react'

import './TotalTab.scss'
import carImg from '../../assets/images/slider-card1.jpg'

const TotalTab = ({ order }) => {
  return (
    <div className="total-tab">
      <section className="total-tab__wrapper">
        <h2 className="total-tab__model-name">Hyndai, i30 N</h2>
        <p className="total-tab__model-number">K 761 HA 73</p>
        <p className="total-tab__model-tank">
          <strong>Топливо</strong> 100%
        </p>
        <p className="total-tab__model-date">
          <strong>Доступна с</strong> 12.06.2019 12:00
        </p>
      </section>
      <img className="total-tab__img" src={carImg} alt={`123`} />
    </div>
  )
}

export default TotalTab
