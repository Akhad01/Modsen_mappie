import React, { memo } from 'react';

import { categoriesIcon } from '../../constants/categories';
import Place from '../Place';
import { PlaceItem } from '../../types/place-item';

interface Props {
  filteredPlaces: PlaceItem[];
}

const Places = memo(function Places({ filteredPlaces }: Props) {
  return filteredPlaces.map((place, index) => {
    return (
      <Place
        id={place.id}
        key={index}
        categoriesIcon={categoriesIcon[place.type]}
        geometry={[place.position[0], place.position[1]]}
      />
    );
  });
});

export default Places;
