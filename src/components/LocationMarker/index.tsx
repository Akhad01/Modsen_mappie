import React, { memo } from 'react';
import { Placemark } from '@pbe/react-yandex-maps';

import { mark } from '../../assets/icons';
import { useAppSelector } from '../../hooks/redux';
import { getUserLocation } from '../../store/selectors/map-selector';


const LocationMarker = memo(function LocationMarker() {
  const userLocation = useAppSelector(getUserLocation)

  return (
    userLocation && (
      <Placemark
        options={{
          iconLayout: 'default#image',
          iconImageHref: mark,
          iconImageSize: [32, 32],
        }}
        geometry={userLocation}
      />
    )
  );
});

export default LocationMarker;
