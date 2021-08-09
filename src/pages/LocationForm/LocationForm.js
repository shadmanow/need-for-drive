import React, { useState, useEffect } from 'react'

import './LocationForm.scss'
import Select from '../../components/Select/Select'
import Map from '../../components/Map/Map'
import { useApi } from '../../hooks/useApi'
import { useMapQuestApi } from '../../hooks/useMapQuestApi'

const LocationForm = ({ city, point, onChange }) => {
  const [points, setPoints] = useState([])
  const [selectablePoints, setSelectablePoints] = useState([])
  const [selectableCities, setSelectableCities] = useState([])

  const [mapCenter, setMapCenter] = useState({ lat: 54.314192, lng: 48.403132 })
  const [mapMarkers, setMarkers] = useState([])

  const { get } = useApi()
  const { getCity, getStreets } = useMapQuestApi()

  useEffect(() => {
    get('/db/city')
      .then(({ data }) => setSelectableCities(data))
      .catch((error) => console.error(error))

    get('/db/point')
      .then(({ data }) => setPoints(data))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    if (city && points.length) {
      const selectedCity = selectableCities.find(({ name }) => name === city)
      const selectablePoints = points.filter(
        ({ cityId }) => cityId && cityId.id === selectedCity.id
      )
      setSelectablePoints(selectablePoints)

      getCity(city)
        .then(({ lat, lng }) => setMapCenter({ lat, lng }))
        .catch((error) => console.error(error))
    }
  }, [city, points])

  useEffect(() => {
    if (selectablePoints.length) {
      const streets = selectablePoints.map(({ address }) => address)
      getStreets(city, streets)
        .then((locations) => setMarkers(locations))
        .catch((error) => console.error(error))
    }
  }, [selectablePoints])

  const onPointSelect = (point) => {
    onChange({ point })
    const marker = mapMarkers.find(({ street }) => street === point)
    if (marker) {
      const { lat, lng } = marker
      setMapCenter({ lat, lng, zoom: 15 })
    }
  }

  return (
    <form className="form">
      <section className="form__section form__section_column">
        <Select
          label="Город"
          value={city}
          placeholder="Начните вводить город..."
          items={selectableCities.map(({ name }) => name)}
          onSelect={(city) => onChange({ city, point: '' })}
        />
        <Select
          label="Пункт выдачи"
          value={point}
          placeholder="Начните вводить пункт..."
          items={selectablePoints.map(({ address }) => address)}
          onSelect={onPointSelect}
          disabled={!selectablePoints.length}
        />
      </section>
      <Map
        label="Выбрать на карте"
        center={mapCenter}
        markers={mapMarkers}
        onMarkerClick={({ street }) => onChange({ point: street })}
      />
    </form>
  )
}

export default LocationForm
