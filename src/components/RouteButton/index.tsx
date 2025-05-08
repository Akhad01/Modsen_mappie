import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { Button } from '@mui/material'
import { useYMaps } from '@pbe/react-yandex-maps'

import { MapContext } from '../../context/MapContext'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '../../hooks/redux'
import { getLocation } from '../../store/selectors/map-selector'
import { getCurrentPlace } from '../../store/selectors/sidebar-selector'

const RouteButton = () => {
  const { currentPlace } = useAppSelector(getCurrentPlace) 

  const location = useAppSelector(getLocation);

  const ymaps = useYMaps(['multiRouter.MultiRoute'])
  const { mapRef, routeRef } = useContext(MapContext)

  const [current, setCurrent] = useState(false);

  useEffect(() => {
    if (routeRef && routeRef.current && currentPlace) {
      const destination = routeRef.current.model.getReferencePoints()[0]
      if (shallowEqual(destination, currentPlace.position)) setCurrent(true) 
    }
  }, [routeRef, currentPlace])

  const handleRoute = useCallback(() => {
    if (!routeRef || !mapRef || !ymaps || !mapRef.current || !location || !currentPlace) {
      return
    }
  
    const [lat, lon] = location
    const [clat, clon] = currentPlace.position
  
    if (
      typeof lat !== 'number' || typeof lon !== 'number' ||
      typeof clat !== 'number' || typeof clon !== 'number'
    ) {
      return
    }
  
    if (routeRef.current) {
      mapRef.current.geoObjects.remove(routeRef.current)
      const destination = routeRef.current?.model.getReferencePoints()[1]
      routeRef.current = undefined
      if (shallowEqual(destination, currentPlace.position)) return setCurrent(false)
    }
  
    routeRef.current = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [
          [lat, lon],
          [clat, clon]
        ],
        params: {
          routingMode: "pedestrian",
        },
      },
      {
        boundsAutoApply: true,
        wayPointVisible: false
      }
    )
  
    setCurrent(true)
    mapRef.current.geoObjects.add(routeRef.current)
  }, [ymaps, location, currentPlace, mapRef, routeRef])

  return (
    <Button onClick={handleRoute} variant="contained" startIcon={<FaLocationDot />}>
        {current ? "Убрать" : "Маршрут" }
    </Button>
  )
}

export default RouteButton