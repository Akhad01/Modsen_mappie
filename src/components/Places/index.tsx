import React, { memo } from 'react';
import { Placemark } from '@pbe/react-yandex-maps';

import { categoriesIcon } from '../../constants/categories';
import { Place } from '../../types/place';

interface Props {
  filteredPlaces: Place[];
}

const Places = memo(function Places({ filteredPlaces }: Props) {
  return filteredPlaces.map((place, index) => {
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
  });
});

export default Places;
