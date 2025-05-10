import { IconButton, List, ListItem, ListItemButton } from '@mui/material';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { MapContext } from '../../context/MapContext';
import { useAppDispatch } from '../../hooks/redux';
import { setPosition, setUserLocation } from '../../store/slices/map';
import { getPlacesThunk } from '../../store/slices/map/getPlacesThunk';
import { SearchContainer, SearchInput, SearchPaper, SuggestionsPaper } from './styled';

interface AddressSuggestion {
  displayName?: string;
  hl?: number[][];
  type: string;
  value: string;
}

const SearchPanel = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const dispatch = useAppDispatch()

  const { mapRef } = useContext(MapContext)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!window.ymaps || address.length < 3) return;

      try {
        await window.ymaps.ready();
        const items = await window.ymaps.suggest(address);
        console.log('items', items);
        
        const texts = items.map((item: AddressSuggestion) => item.displayName || item.value);
        setSuggestions(texts);
      } catch (error) {
        console.error('Ошибка при получении подсказок:', error);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300); // debounce

    return () => clearTimeout(debounce);
  }, [address]);

  const handleSuggestionClick = (suggestion: string) => {
    setAddress(suggestion);
    setSuggestions([]);
  };

  const handleSearchClick = async () => {
    if (!address || !window.ymaps || !mapRef?.current) return;

    try {
      const geocodeResult = await window.ymaps.geocode(address);
      const firstGeoObject = geocodeResult.geoObjects.get(0);

      if (firstGeoObject) {
        const geometry = firstGeoObject.geometry as unknown as { getCoordinates: () => number[] }
        if (geometry && typeof geometry.getCoordinates === 'function') {
          const coords = geometry.getCoordinates();
          dispatch(setUserLocation(coords))
          dispatch(setPosition(coords));
          mapRef.current.setCenter(coords, 15);
          dispatch(getPlacesThunk())
        } else {
          console.error('Геометрия недоступна или getCoordinates отсутствует');
        }
      } else {
        console.error('Адрес не найден');
      }
    } catch (error) {
      console.error('Ошибка при геокодировании:', error);
    }
  };


  return (
    <SearchContainer>
      <SearchPaper>
        <IconButton onClick={handleSearchClick}>
          <IoSearch />
        </IconButton>
        <SearchInput
          placeholder="Место, адрес..."
          inputProps={{ 'aria-label': 'поиск по адресу' }}
          value={address}
          onChange={handleChange}
        />
      </SearchPaper>

      {suggestions.length > 0 && (
        <SuggestionsPaper>
          <List>
            {suggestions.map((suggestion, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </SuggestionsPaper>
      )}
    </SearchContainer>
  );
};

export default SearchPanel;


