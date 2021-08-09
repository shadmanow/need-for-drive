import React, { useState, useEffect } from 'react'

import './LocationForm.scss'
import useMapQuestApi from '../../hooks/useMapQuestApi'
import Select from '../../components/Select/Select'
import Map from '../../components/Map/Map'

const LocationForm = ({ city, point, onChange, cities, points }) => {
  const [selectablePoints, setSelectablePoints] = useState([])
  const [mapCenter, setMapCenter] = useState(null)
  const [mapMarkers, setMarkers] = useState(null)
  const { getCity, getStreets } = useMapQuestApi()

  /* eslint-disable */
  useEffect(() => {
    const selectedCity = cities.find(({ name }) => name === city)
    const curPoints = points.filter(
      ({ cityId }) => cityId && cityId.id === selectedCity.id
    )
    setSelectablePoints(curPoints)

    getCity(selectedCity.name)
      .then(({ lat, lng }) => setMapCenter({ lat, lng }))
      .catch((error) => console.error(error))
  }, [city])
  /* eslint-enable */

  /* eslint-disable */
  useEffect(() => {
    if (selectablePoints.length) {
      const streets = selectablePoints.map(({ address }) => address)
      getStreets(city, streets)
        .then((locations) => setMarkers(locations))
        .catch((error) => console.error(error))
    }
  }, [selectablePoints])
  /* eslint-enable */

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
          items={cities.map(({ name }) => name)}
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
