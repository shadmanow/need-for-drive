import React, { useState, useEffect, useRef } from 'react'
import DG from '2gis-maps'

import './Map.scss'

const Map = ({ label }) => {
  const [map, setMap] = useState(null)
  const mapRef = useRef()

  useEffect(() => {
    if (mapRef.current) {
      const map = DG.map(mapRef.current, {
        center: [54.314192, 48.403132],
        zoom: 11,
        fullscreenControl: false,
      })
      setMap(map)
    }
  }, [])

  return (
    <div className="map">
      {label && <label className="map__label">{label}</label>}
      <div className="map__inner" ref={mapRef} />
    </div>
  )
}

export { Map }
