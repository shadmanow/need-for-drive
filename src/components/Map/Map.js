import React, { useState, useEffect, useRef } from 'react'
import DG from '2gis-maps'

import './Map.scss'

const Map = ({ label, center, markers }) => {
  const [map, setMap] = useState(null)
  const [curMarkers, setCurMarkers] = useState([])
  const mapRef = useRef()

  useEffect(() => {
    if (mapRef.current) {
      const map = DG.map(mapRef.current, {
        center,
        zoom: 12,
        fullscreenControl: false,
      })
      setMap(map)
    }
  }, [])

  useEffect(() => {
    if (map) {
      map.setView(DG.latLng(center.lat, center.lng), 10)
    }
  }, [center])

  useEffect(() => {
    if (map) {
      for (const marker of curMarkers) {
        marker.removeFrom(map)
      }
      const newMarkers = []
      for (const marker of markers) {
        const newMarker = DG.marker([marker.lat, marker.lng])
        newMarkers.push(newMarker)
        newMarker.addTo(map)
      }
      setCurMarkers(newMarkers)
    }
  }, [markers])

  return (
    <div className="map">
      {label && <label className="map__label">{label}</label>}
      <div className="map__inner" ref={mapRef} />
    </div>
  )
}

export default Map
