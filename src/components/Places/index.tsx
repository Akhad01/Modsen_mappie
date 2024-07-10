import React, { memo } from 'react';
import { Placemark } from '@pbe/react-yandex-maps';

import { useAppSelector } from '../../hooks/redux';
import { categoriesIcon } from '../../constants/categories';
import { getPlaces } from '../../store/selectors/map-selector';

const Places = memo(function Places() {
  const places = useAppSelector(getPlaces);

  return (
    places.length &&
    places.map((place, index) => {
      return (
        <Placemark
          key={index}
          options={{
            iconLayout: 'default#image',
            iconImageSize: [32, 32],
            iconImageHref: categoriesIcon[place.type],
          }}
          geometry={[place.lat, place.lon]}
        />
      );
    })
  );
});

export default Places;
