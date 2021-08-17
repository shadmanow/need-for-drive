import React, { useState, useEffect } from 'react'

import './LocationForm.scss'
import useMapQuestApi from '../../hooks/useMapQuestApi'
import Select from '../../components/Select/Select'
import Map from '../../components/Map/Map'

const LocationForm = ({ order, onChange, cities, points }) => {
  const { getCity, getStreets } = useMapQuestApi()
  const [filteredPoints, setFilteredPoints] = useState([])
  const [mapCenter, setMapCenter] = useState(null)
  const [mapMarkers, setMarkers] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const cityId = cities.find(({ name }) => name === order.cityId.name)

      const filteredPoints = points.filter(({ city }) => city.id === cityId.id)
      setFilteredPoints(filteredPoints)

      const { lat, lng } = await getCity(cityId.name)
      setMapCenter({ lat, lng })

      const streets = filteredPoints.map(({ address }) => address)
      const locations = await getStreets(cityId.name, streets)
      setMarkers(locations)
    }

    if (order.cityId) {
      fetchData()
    }
  }, [order.cityId])

  const onPointSelect = (point) => {
    if (point) {
      const pointId = points.find(({ address }) => address === point)
      const { lat, lng } = mapMarkers.find(({ street }) => street === point)
      setMapCenter({ lat, lng, zoom: 15 })
      onChange({ cityId: pointId.city, pointId })
    } else {
      onChange({ cityId: order.cityId, pointId: null })
    }
  }

  const onCitySelect = (city) => {
    const cityId = cities.find(({ name }) => name === city)
    onChange({ cityId, pointId: null })
  }

  const onMarkerClick = ({ street }) => {
    const pointId = points.find(({ address }) => address === street)
    onChange({ cityId: pointId.city, pointId: pointId })
  }

  return (
    <form className="form">
      <section className="form__section form__section_column">
        <Select
          label="Город"
          value={order.cityId?.name ?? ''}
          placeholder="Начните вводить город..."
          items={cities.map(({ name }) => name)}
          onSelect={onCitySelect}
        />
        <Select
          label="Пункт выдачи"
          value={order.pointId?.address ?? ''}
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
