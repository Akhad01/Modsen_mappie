import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { Button } from '@mui/material'
import { useYMaps } from '@pbe/react-yandex-maps'

import { MapContext } from '../../context/MapContext'
import { shallowEqual } from 'react-redux'

const RouteButton = () => {
  const place = {
    type: "historic",
    id: 5853422863,
    position: [53.8613282, 27.4618477],
    tags: {
      historic: "memorial",
      name: "Памятная дошка Івану Ахрэмчыку"
    }
  }

  const lat = 53.854087035329904
  const lon = 27.471980358099405

  const ymaps = useYMaps(['multiRouter.MultiRoute'])
  const { mapRef, routeRef } = useContext(MapContext)

  const [current, setCurrent] = useState(false);

  useEffect(() => {
    if (routeRef && routeRef.current && place) {
      const destination = routeRef.current.model.getReferencePoints()[0]
      if (shallowEqual(destination, place.position)) setCurrent(true) 
    }
  }, [routeRef, place])

  const handleRoute = useCallback(() => {
    if (!routeRef || !mapRef || !ymaps || !mapRef.current || !routeRef) {
      return
    }

    if (routeRef.current && place) {
      mapRef.current.geoObjects.remove(routeRef.current)
      const destination = routeRef.current?.model.getReferencePoints()[1]
      routeRef.current = undefined
      if (shallowEqual(destination, place.position)) return setCurrent(false)
    }

    routeRef.current = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [
          [lat, lon], 
          place.position
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
  }, [ymaps, lat, lon, routeRef, place, mapRef]) 

  return (
    <Button onClick={handleRoute} variant="contained" startIcon={<FaLocationDot />}>
        {current ? "Убрать" : "Маршрут" }
    </Button>
  )
}

export default RouteButton