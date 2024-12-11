import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ZoomControl } from '@pbe/react-yandex-maps';

import CenterGeolocationControl from '../CenterGeolocationControl';
import LocationMarker from '../LocationMarker';
import PersonRadius from '../PersonRadius';
import Places from '../Places';

import { getMapRadius } from '../../store/selectors/map-selector';
import { setPosition } from '../../store/slices/map/map-slice';

import { getCategories } from '../../store/selectors/sidebar-selector';
import { useFilteredPlaces } from '../../hooks/use-filtered-places';

import { getPlacesThunk } from '../../store/slices/map/getPlacesThunk';

const MapBody = () => {
  const dispatch = useAppDispatch();
  const radius = useAppSelector(getMapRadius);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null,
  );
  const categories = useAppSelector(getCategories);

  const filteredPlaces = useFilteredPlaces();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          setUserLocation([latitude, longitude]);
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
  }, [categories, radius]);

  return (
    <>
      <ZoomControl
        options={{
          size: 'small',
          position: { top: '45px', left: '10px' },
        }}
      />
      <CenterGeolocationControl />
      <Places filteredPlaces={filteredPlaces} />
      <LocationMarker userLocation={userLocation} />
      <PersonRadius userLocation={userLocation} />
    </>
  );
};

export default MapBody;
