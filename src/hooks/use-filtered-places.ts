import { useEffect, useState } from 'react';
import { getPlaces } from '../store/selectors/map-selector';
import { getCategories } from '../store/selectors/sidebar-selector';
import { useAppSelector } from './redux';
import { Category } from '../types/category';
import { PlaceItem } from '../types/place-item';

export const useFilteredPlaces = (): PlaceItem[] => {
  const places: PlaceItem[] = useAppSelector(getPlaces);
  const categories: Category[] = useAppSelector(getCategories);

  const [filteredPlaces, setFilteredPlaces] = useState<PlaceItem[]>([]);

  useEffect(() => {
    const filterPlacesBasedOnCategories = (
      categories: Category[],
      places: PlaceItem[],
    ) => {
      // Создаем набор типов категорий, у которых isActive равен false
      const inactiveTypes = new Set(
        categories
          .filter((category) => !category.isActive)
          .map((category) => category.type),
      );

      // Фильтруем места, исключая те, которые соответствуют неактивным категориям
      return places.filter((place) => !inactiveTypes.has(place.type));
    };

    setFilteredPlaces(filterPlacesBasedOnCategories(categories, places));
  }, [categories, places]);

  return filteredPlaces;
};
