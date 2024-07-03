import React from 'react';
import { YMaps } from '@pbe/react-yandex-maps';
// import { Navigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Map from '../../components/Map';
import { Container } from './styled';

const MainPage = () => {
  return (
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
  );
};

export default MainPage;
