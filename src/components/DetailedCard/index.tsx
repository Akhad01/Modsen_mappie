import React, { useEffect, useState } from 'react';
import { Avatar, Button, CardActions, Typography } from '@mui/material';

import { FaBookmark, FaLocationDot } from 'react-icons/fa6';
import {
  ButtonAction,
  CardContainer,
  CardDetails,
  CardIcons,
  CardTitle,
} from './styled';
import { useAppSelector } from '../../hooks/redux';
import { getCurrentPlaceId } from '../../store/selectors/sidebar-selector';
import { getPlaces } from '../../store/selectors/map-selector';
import { PlaceItem } from '../../types/place-item';
import { categoriesIcon } from '../../constants/categories';

const DetailedCard = () => {
  const placeId = useAppSelector(getCurrentPlaceId);
  const places = useAppSelector(getPlaces);

  const [currentPlace, setCurrentPlace] = useState<PlaceItem | null>(null);

  useEffect(() => {
    function fulterPlaces(): PlaceItem | null {
      if (!places || !placeId) {
        return null;
      }

      return places.find((place: PlaceItem) => place.id === placeId) || null;
    }

    setCurrentPlace(fulterPlaces());
  }, [placeId, places]);

  return (
    currentPlace && (
      <CardContainer>
        <CardDetails>
          <CardIcons>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src={categoriesIcon[currentPlace.type]}
            />
          </CardIcons>
          <CardTitle variant="h5">{currentPlace.name}</CardTitle>
          <Typography
            style={{ marginTop: '10px' }}
            color="text.secondary"
            variant="body1"
          >
            {currentPlace.description}
          </Typography>
          <Typography style={{ marginTop: '10px' }} variant="body2">
            {currentPlace.hours || 'Нет информации'}
          </Typography>
          <CardActions style={{ marginTop: '10px', justifyContent: 'center' }}>
            <ButtonAction
              variant="outlined"
              startIcon={<FaBookmark color="#808080" />}
            >
              Сохранено
            </ButtonAction>
            <Button variant="contained" startIcon={<FaLocationDot />}>
              Маршрут
            </Button>
          </CardActions>
        </CardDetails>
      </CardContainer>
    )
  );
};

export default DetailedCard;
