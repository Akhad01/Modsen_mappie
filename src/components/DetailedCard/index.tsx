import React, { useEffect } from 'react';
import { Avatar, CardActions, Typography } from '@mui/material';

import {
  CardContainer,
  CardDetails,
  CardIcons,
  CardTitle,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getCurrentPlace, getCurrentPlaceId } from '../../store/selectors/sidebar-selector';
import { categoriesIcon } from '../../constants/categories';
import RouteButton from '../RouteButton';
import { getInfoAboutPlaceThunk } from '../../store/slices/sidebar/getInfoAboutPlaceThunk';
import PlaceSaveToggle from '../PlaceSaveToggle';

const DetailedCard = () => {
  const dispatch = useAppDispatch()

  const currentPlace = useAppSelector(getCurrentPlace)
  const currentPlaceId = useAppSelector(getCurrentPlaceId)

  useEffect(() => {
    dispatch(getInfoAboutPlaceThunk())
  }, [getInfoAboutPlaceThunk, currentPlaceId])

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
          <CardTitle variant="h5">{currentPlace.tags['name:ru'] ?? currentPlace.tags.name}</CardTitle>
          <Typography style={{ marginTop: '10px' }} variant="body2">
            {currentPlace.tags.opening_hours || 'Нет информации'}
          </Typography>
          <CardActions style={{ marginTop: '10px', justifyContent: 'center' }}>
            <PlaceSaveToggle />
            <RouteButton/>
          </CardActions>
        </CardDetails>
      </CardContainer>
    )
  );
};

export default DetailedCard;
