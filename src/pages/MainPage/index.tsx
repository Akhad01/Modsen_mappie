import React, { useRef, useState } from 'react';
import { YMaps } from '@pbe/react-yandex-maps';
// import { Navigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Map from '../../components/Map';

import { Container } from './styled';
import { MapContext } from '../../context/MapContext';

const MainPage = () => {
  const mapRef = useRef<ymaps.Map>()
  const routeRef = useRef<ymaps.multiRouter.MultiRoute>()

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
