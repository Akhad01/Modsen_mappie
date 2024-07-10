import React, { memo } from 'react';
import { Placemark } from '@pbe/react-yandex-maps';

import { mark } from '../../assets/icons';

interface Props {
  userLocation: number[] | null;
}

const LocationMarker = memo(function LocationMarker({ userLocation }: Props) {
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
