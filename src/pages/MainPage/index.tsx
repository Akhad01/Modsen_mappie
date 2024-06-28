import { Circle, Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { Navigate } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import { Container } from './styled';
import { mark } from '../../assets/icons';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/use-auth';

const MainPage = () => {
  const { isAuth, email } = useAuth();
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );

  console.log('isAuth', isAuth);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const defaultState = {
    center: userLocation || [55.751244, 37.618423], // Центр карты (Москва) по умолчанию
    zoom: userLocation ? 12 : 10,
  };

  return (
    <YMaps query={{ apikey: import.meta.env.VITE_REACT_REACT_APP_YANDEX_API }}>
      <Container>
        <Sidebar />
        <Map height='100vh' width='100%' defaultState={defaultState}>
          {userLocation && (
            <Placemark
              options={{
                iconLayout: 'default#image',
                iconImageHref: mark,
                iconImageSize: [32, 32],
              }}
              geometry={userLocation}
            />
          )}
          <Circle
            geometry={[userLocation, 10000]}
            options={{
              fillColor: '#5E7BC7',
              fillOpacity: 0.5,
            }}
          />
        </Map>
      </Container>
    </YMaps>
  );
  // : (
  //   <Navigate to='/login' />
  // );
};

export default MainPage;
