import React, { useEffect, useRef } from 'react';
import { YMaps } from '@pbe/react-yandex-maps';
// import { Navigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Map from '../../components/Map';

import { Container } from './styled';
import { MapContext } from '../../context/MapContext';
import { setMapSettings } from '../../store/slices/map/map-slice';
import { useDispatch } from 'react-redux';

const MainPage = () => {
  const dispatch = useDispatch()
  const mapRef = useRef<ymaps.Map>()
  const routeRef = useRef<ymaps.multiRouter.MultiRoute>()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const lat = +params.get('lat')! || 0
    const lon = +params.get('lon')! || 0
    const zoom = +params.get('zoom')! || 5
    console.log(params.toString());
    
    dispatch(setMapSettings({ center: [lat, lon], zoom }))
  }, [])

  return (
    <MapContext.Provider value={{ mapRef, routeRef }}>
      <YMaps
        query={{
          apikey: import.meta.env.VITE_REACT_REACT_APP_YANDEX_API,
        }}
      >
        <Container>
          <Sidebar />
          <Map />
        </Container>
      </YMaps>
    </MapContext.Provider>
  );
};

export default MainPage;
