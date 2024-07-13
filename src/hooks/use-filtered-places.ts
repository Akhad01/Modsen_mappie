import { useEffect, useState } from 'react';
import { getPlaces } from '../store/selectors/map-selector';
import { getCategories } from '../store/selectors/sidebar-selector';
import { useAppSelector } from './redux';
import { Category } from '../types/category';
import { Place } from '../types/place';

export const useFilteredPlaces = (): Place[] => {
  const places: Place[] = useAppSelector(getPlaces);
  const categories: Category[] = useAppSelector(getCategories);

  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const filterPlacesBasedOnCategories = (
      categories: Category[],
      places: Place[],
    ) => {
      // Создаем набор типов категорий, у которых isActive равен false
      const inactiveTypes = new Set(
        categories
          .filter((category) => !category.isActive)
          .map((category) => category.type),
      );

      console.log('inactiveTypes', inactiveTypes);

      // Фильтруем места, исключая те, которые соответствуют неактивным категориям
      return places.filter((place) => !inactiveTypes.has(place.type));
    };

    setFilteredPlaces(filterPlacesBasedOnCategories(categories, places));
  }, [categories, places]);

  return filteredPlaces;
};
