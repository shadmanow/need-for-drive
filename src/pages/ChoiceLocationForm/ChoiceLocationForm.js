import React, { useState, useEffect } from 'react'

import './ChoiceLocationForm.scss'
import Select from '../../components/Select/Select'
import Map from '../../components/Map/Map'
import { useApi } from '../../hooks/useApi'
import { useMapQuestApi } from '../../hooks/useMapQuestApi'

const ChoiceLocationForm = ({ city, point, onChange }) => {
  const [points, setPoints] = useState([])
  const [selectCities, setSelectCities] = useState([])
  const [selectPoints, setSelectPoints] = useState([])

  const [mapCenter, setMapCenter] = useState({ lat: 54.314192, lng: 48.403132 })
  const [markers, setMarkers] = useState([])

  const { get } = useApi()
  const { getCity, getStreets } = useMapQuestApi()

  useEffect(() => {
    get('/db/city')
      .then(({ data }) => setSelectCities(data))
      .catch((err) => console.error(err))

    get('/db/point')
      .then(({ data }) => setPoints(data))
      .catch((err) => console.error(err))
  }, [get])

  useEffect(() => {
    if (city) {
      getCity(city)
        .then(({ lat, lng }) => setMapCenter({ lat, lng }))
        .catch((err) => console.error(err))

      const cityItem = selectCities.find((item) => item.name === city)
      const curPoints = points.filter(
        ({ cityId }) => cityId && cityId.id === cityItem.id
      )

      setSelectPoints(curPoints)
      console.log(curPoints.map((point) => point.address))

      getStreets(
        city,
        curPoints.map((point) => point.address)
      )
        .then((latLngArray) => setMarkers(latLngArray))
        .catch((err) => console.error(err))
    }
  }, [city])

  useEffect(() => {})

  return (
    <form className="choice-location-form">
      <div className="choice-location-form__wrapper">
        <Select
          label="Город"
          placeholder="Начните вводить город..."
          items={selectCities.map((city) => city.name)}
          onSelect={(city) => onChange({ city })}
        />
        <Select
          label="Пункт выдачи"
          placeholder="Начните вводить пункт..."
          items={selectPoints.map((point) => `${point.name} ${point.address}`)}
          disabled={!selectPoints.length}
          onSelect={(point) => onChange({ point })}
        />
      </div>
      <Map label="Выбрать на карте" center={mapCenter} markers={markers} />
    </form>
  )
}

export default ChoiceLocationForm
