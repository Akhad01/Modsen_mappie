import React from 'react';
import { Circle } from '@pbe/react-yandex-maps';

import { useAppSelector } from '../../hooks/redux';
import { getMapRadius } from '../../store/selectors/map-selector';

interface Props {
  userLocation: number[] | null;
}

const PersonRadius = ({ userLocation }: Props) => {
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
