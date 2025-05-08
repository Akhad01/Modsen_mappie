import React from 'react';
import { Circle } from '@pbe/react-yandex-maps';

import { useAppSelector } from '../../hooks/redux';
import { getMapRadius, getUserLocation } from '../../store/selectors/map-selector';


const PersonRadius = () => {
  const userLocation = useAppSelector(getUserLocation)
  const radius = useAppSelector(getMapRadius);

  if (!userLocation || !radius) return null;
  return (
    <Circle
      geometry={[userLocation, radius]}
      options={{
        // fillColor: '#5E7BC7',
        strokeColor: '#5E7BC&',
        fillOpacity: 0.5,
        strokeWidth: 5,
        strokeOpacity: 0.2,
      }}
    />
  );
};

export default PersonRadius;
