import React, { useState, useEffect } from 'react'

import './LocationForm.scss'
import useMapQuestApi from '../../hooks/useMapQuestApi'
import Select from '../../components/Select/Select'
import Map from '../../components/Map/Map'

const LocationForm = ({ city, point, onChange, cities, points }) => {
  const { getCity, getStreets } = useMapQuestApi()
  const [filteredPoints, setFilteredPoints] = useState([])
  const [mapCenter, setMapCenter] = useState(null)
  const [mapMarkers, setMarkers] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const selectedCity = cities.find(({ name }) => name === city)
      const { id: cityId, name: cityName } = selectedCity

      const filteredPoints = points.filter(({ city }) => city.id === cityId)
      setFilteredPoints(filteredPoints)

      const { lat, lng } = await getCity(cityName)
      setMapCenter({ lat, lng })

      const streets = filteredPoints.map(({ address }) => address)
      const locations = await getStreets(cityName, streets)
      setMarkers(locations)
    }

    if (city) {
      fetchData()
    }
  }, [city])

  const onPointSelect = (point) => {
    onChange({ city, point })
    if (point) {
      const { lat, lng } = mapMarkers.find(({ street }) => street === point)
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
          items={filteredPoints.map(({ address }) => address)}
          onSelect={onPointSelect}
        />
      </section>
      <Map
        label="Выбрать на карте"
        center={mapCenter}
        markers={mapMarkers}
        onMarkerClick={({ street }) => onChange({ city, point: street })}
      />
    </form>
  )
}

export default LocationForm
