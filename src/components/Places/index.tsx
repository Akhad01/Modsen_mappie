import React, { memo } from 'react';
import { Placemark } from '@pbe/react-yandex-maps';

import { categoriesIcon } from '../../constants/categories';
import Place from '../Place';
import { PlaceItem } from '../../types/place-item';

interface Props {
  filteredPlaces: PlaceItem[];
}

const Places = memo(function Places({ filteredPlaces }: Props) {
  return filteredPlaces.map((place, index) => {
    return (
      // <Placemark
      //   key={index}
      //   onClick={handleClick(id)}
      //   options={{
      //     iconLayout: 'default#image',
      //     iconImageSize: [32, 32],
      //     iconImageHref: categoriesIcon[place.type],
      //   }}
      //   geometry={[place.lat, place.lon]}
      // />
      <Place
        id={place.id}
        key={index}
        categoriesIcon={categoriesIcon[place.type]}
        geometry={[place.lat, place.lon]}
      />
    );
  });
});

export default Places;
