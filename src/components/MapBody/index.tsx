import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ZoomControl } from '@pbe/react-yandex-maps';

import CenterGeolocationControl from '../CenterGeolocationControl';
import LocationMarker from '../LocationMarker';
import PersonRadius from '../PersonRadius';
import Places from '../Places';

import { getMapRadius } from '../../store/selectors/map-selector';
import { setPlaces, setPosition } from '../../store/slices/map-slice';
import { fetchPlaces } from '../../api/api';
import { getCategories } from '../../store/selectors/sidebar-selector';
import { useFilteredPlaces } from '../../hooks/use-filtered-places';

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
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          dispatch(setPosition([latitude, longitude]));

          const filterTypeItems = categories.map((item) => item.type);

          const fetchedPlaces = await fetchPlaces(
            latitude,
            longitude,
            radius / 111000,
            filterTypeItems,
          );
          dispatch(setPlaces(fetchedPlaces));
        },
        (error) => {
          console.error('Error getting location', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [categories]);

  useEffect(() => {
    const timer = setTimeout(() => {}, 750);
    return () => clearTimeout(timer);
  }, [radius]);

  console.log('filteredPlaces', filteredPlaces);

  return (
    <>
      <ZoomControl
        options={{
          size: 'small',
          position: { top: '10px', right: '10px' },
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
