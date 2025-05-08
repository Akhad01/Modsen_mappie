import React, { memo } from 'react';

import Place from '../Place';
import { categoriesIcon } from '../../constants/categories';
import { useFilteredPlaces } from '../../hooks/use-filtered-places';


const Places = memo(function Places() {
  const filteredPlaces = useFilteredPlaces();

  if (!filteredPlaces || filteredPlaces.length === 0) {
    return null; 
  }
  
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
