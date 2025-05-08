import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { ZoomControl } from '@pbe/react-yandex-maps';

import CenterGeolocationControl from '../CenterGeolocationControl';
import LocationMarker from '../LocationMarker';
import PersonRadius from '../PersonRadius';
import Places from '../Places';

import { setPosition, setUserLocation } from '../../store/slices/map';

import { getPlacesThunk } from '../../store/slices/map/getPlacesThunk';

const MapBody = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          dispatch(setUserLocation([latitude, longitude]));
          dispatch(setPosition([latitude, longitude]));

          const timer = setTimeout(() => {
            dispatch(getPlacesThunk())
          }, 1000)

          return () => clearTimeout(timer)
        },
        (error) => {
          console.error('Error getting location', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <>
      <ZoomControl
        options={{
          size: 'small',
          position: { top: '45px', right: '10px' },
        }}
      />
      <CenterGeolocationControl />
      <Places />
      <LocationMarker />
      <PersonRadius />
    </>
  );
};

export default MapBody;
