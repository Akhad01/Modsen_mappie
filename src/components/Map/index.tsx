import { Circle, Map as MapY, ZoomControl } from '@pbe/react-yandex-maps';
import React, { useEffect, useRef, useState } from 'react';
// import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  getMapRadius,
  getMapSettings,
} from '../../store/selectors/map-selector';
import { fetchPlaces } from '../../pages/MainPage/api';
import { Placemark } from '@pbe/react-yandex-maps/typings/geo-objects/Placemark';
import LocationMarker from '../LocationMarker';
import { setMapSettings, setPosition } from '../../store/slices/map-slice';
import CenterGeolocationControl from '../CenterGeolocationControl';

const Map = () => {
  //   const { isAuth } = useAuth();
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null,
  );
  const radius = useAppSelector(getMapRadius);
  const mapRef = useRef(null);
  const mapSettings = useAppSelector(getMapSettings);
  const dispatch = useAppDispatch();

  console.log('mapRef', mapRef.current);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log('lat:', latitude, 'lon', longitude);
          setUserLocation([latitude, longitude]);
          dispatch(setPosition([latitude, longitude]));

          const fetchedPlaces = await fetchPlaces(latitude, longitude);
          console.log('f', fetchedPlaces);
        },
        (error) => {
          console.error('Error getting location', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {}, 750);
    return () => clearTimeout(timer);
  }, [radius]);

  const handleBoundsChange = (event: ymaps.IEvent) => {
    const map = event.get('target');
    const [lat, lon] = map.getCenter();
    const zoom = map.getZoom();
    dispatch(setMapSettings({ center: [lat, lon], zoom }));
  };

  return userLocation ? (
    <MapY
      instanceRef={mapRef}
      height="100vh"
      width="100%"
      state={mapSettings}
      onBoundsChange={handleBoundsChange}
      options={{
        suppressMapOpenBlock: true,
        copyrightProvidersVisible: false,
        copyrightLogoVisible: false,
        copyrightUaVisible: false,
      }}
    >
      <ZoomControl
        options={{
          size: 'small',
          position: { top: '10px', right: '10px' },
        }}
      />
      <CenterGeolocationControl />
      <LocationMarker userLocation={userLocation} />
      <Circle
        geometry={[userLocation, radius]}
        options={{
          fillColor: '#5E7BC7',
          fillOpacity: 0.5,
        }}
      />
    </MapY>
  ) : (
    <h1>Loadin...</h1>
  );
};

export default Map;
