import React, { useState, useEffect, useRef } from 'react'
import DG from '2gis-maps'

import './Map.scss'

const DEFAULT_ZOOM = 11

const Map = ({ label, center, markers, onMarkerClick }) => {
  const [map, setMap] = useState(null)
  const [curMarkers, setCurMarkers] = useState([])
  const mapRef = useRef()

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
    return () => {
      if (curMarkers) {
        for (const marker of curMarkers) {
          marker.off('click', handleMarkerClick)
        }
      }
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
        newMarker.marker = marker
        newMarker.on('click', () => handleMarkerClick(marker))
        newMarkers.push(newMarker)
        newMarker.addTo(map)
      }
      setCurMarkers(newMarkers)
    }
  }, [markers])

  useEffect(() => {
    for (const marker of curMarkers) {
      marker.off('click', handleMarkerClick)
      marker.on('click', () => handleMarkerClick(marker.marker))
    }
  }, [onMarkerClick])

  const handleMarkerClick = (marker) => onMarkerClick(marker)

  return (
    <div className="map">
      {label && <label className="map__label">{label}</label>}
      <div className="map__inner" ref={mapRef} />
    </div>
  )
}

export default Map
