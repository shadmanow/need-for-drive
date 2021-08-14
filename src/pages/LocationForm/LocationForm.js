import React, { useState, useEffect } from 'react'

import './LocationForm.scss'
import useMapQuestApi from '../../hooks/useMapQuestApi'
import Select from '../../components/Select/Select'
import Map from '../../components/Map/Map'

const LocationForm = ({ cityId, pointId, onChange, cities, points }) => {
  const { getCity, getStreets } = useMapQuestApi()
  const [filteredPoints, setFilteredPoints] = useState([])
  const [mapCenter, setMapCenter] = useState(null)
  const [mapMarkers, setMarkers] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const cityId = cities.find(({ name }) => name === cityId.name)

      const filteredPoints = points.filter(({ city }) => city.id === cityId.id)
      setFilteredPoints(filteredPoints)

      const { lat, lng } = await getCity(cityId.name)
      setMapCenter({ lat, lng })

      const streets = filteredPoints.map(({ address }) => address)
      const locations = await getStreets(cityId.name, streets)
      setMarkers(locations)
    }

    if (cityId) {
      fetchData()
    }
  }, [cityId])

  const onPointSelect = (point) => {
    if (point) {
      const pointId = points.find(({ name }) => name === point)
      const { lat, lng } = mapMarkers.find(({ street }) => street === point)
      setMapCenter({ lat, lng, zoom: 15 })
      onChange({ cityId, pointId })
    } else {
      onChange({ cityId, pointId: null })
    }
  }

  const onCitySelect = (city) => {
    const cityId = cities.find(({ name }) => name === city)
    onChange({ cityId, point: '' })
  }

  const onMarkerClick = ({ street }) => {
    const pointId = points.find(({ address }) => address === street)
    onChange({ cityId, pointId })
  }

  return (
    <form className="form">
      <section className="form__section form__section_column">
        <Select
          label="Город"
          value={cityId ? cityId.name : ''}
          placeholder="Начните вводить город..."
          items={cities.map(({ name }) => name)}
          onSelect={onCitySelect}
        />
        <Select
          label="Пункт выдачи"
          value={pointId ? pointId.address : ''}
          placeholder="Начните вводить пункт..."
          items={filteredPoints.map(({ address }) => address)}
          onSelect={onPointSelect}
        />
      </section>
      <Map
        label="Выбрать на карте"
        center={mapCenter}
        markers={mapMarkers}
        onMarkerClick={onMarkerClick}
      />
    </form>
  )
}

export default LocationForm
