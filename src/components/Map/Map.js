import React, { useState, useEffect, useRef } from 'react'
import DG from '2gis-maps'

import './Map.scss'

const DEFAULT_ZOOM = 11

const Map = ({ label, center, markers, onMarkerClick }) => {
  const [map, setMap] = useState(null)
  const [curMarkers, setCurMarkers] = useState([])
  const mapRef = useRef()

  /* eslint-disable */
  useEffect(() => {
    if (!center) return

    if (map) {
      map.setView(
        [center.lat, center.lng],
        center.zoom ? center.zoom : DEFAULT_ZOOM
      )
    } else if (mapRef.current) {
      const map = DG.map(mapRef.current, {
        center,
        zoom: 11,
        fullscreenControl: false,
      })
      setMap(map)
    }
  }, [center])

  useEffect(() => {
    if (map && markers && markers.length) {
      for (const marker of curMarkers) {
        marker.removeFrom(map)
      }
      const newMarkers = []
      for (const marker of markers) {
        const newMarker = DG.marker([marker.lat, marker.lng])
        newMarker.on('click', () => onMarkerClick(marker))
        newMarkers.push(newMarker)
        newMarker.addTo(map)
      }
      setCurMarkers(newMarkers)
    }
  }, [markers])
  /* eslint-enable */

  return (
    <div className="map">
      {label && <label className="map__label">{label}</label>}
      <div className="map__inner" ref={mapRef} />
    </div>
  )
}

export default Map
