import React, { useState, useEffect } from 'react'

import './ChoiceLocationForm.scss'
import Select from '../../components/Select/Select'
import Map from '../../components/Map/Map'
import { testItems } from './Items'

const ChoiceLocationForm = ({ city, point, onChange }) => {
  const [cities, setCities] = useState(testItems.cities)
  const [points, setPoints] = useState([])

  useEffect(() => {
    if (city) {
      setPoints(testItems.points)
    } else {
      setPoints([])
    }
  }, [city])

  return (
    <form className="choice-location-form">
      <div className="choice-location-form__wrapper">
        <Select
          label="Город"
          placeholder="Начните вводить город..."
          value={city}
          items={cities}
          onChange={(city) => onChange({ city })}
        />
        <Select
          label="Пункт выдачи"
          placeholder="Начните вводить пункт..."
          value={point}
          items={points}
          disabled={!points.length}
          onChange={(point) => onChange({ point })}
        />
      </div>
      <Map label="Выбрать на карте" />
    </form>
  )
}

export default ChoiceLocationForm
