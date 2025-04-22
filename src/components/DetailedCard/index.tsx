import React, { useCallback, useEffect } from 'react';
import { Avatar, CardActions, Typography } from '@mui/material';
import { FaBookmark } from 'react-icons/fa6';

import {
  ButtonAction,
  CardContainer,
  CardDetails,
  CardIcons,
  CardTitle,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getCurrentPlace, getCurrentPlaceId } from '../../store/selectors/sidebar-selector';
import { categoriesIcon } from '../../constants/categories';
import RouteButton from '../RouteButton';
import { addToFavoritesThunk } from '../../store/slices/favorites/addToFavoritesThunk';
import { getInfoAboutPlaceThunk } from '../../store/slices/sidebar/getInfoAboutPlaceThunk';

const DetailedCard = () => {
  const dispatch = useAppDispatch()

  const currentPlace = useAppSelector(getCurrentPlace)
  const currentPlaceId = useAppSelector(getCurrentPlaceId)

  const handleAddToFavorites = useCallback(() => {
    dispatch(addToFavoritesThunk(currentPlaceId))
  }, [addToFavoritesThunk, currentPlaceId])


  useEffect(() => {
    dispatch(getInfoAboutPlaceThunk())
  }, [currentPlace])



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
            <ButtonAction
              onClick={handleAddToFavorites}
              variant="outlined"
              startIcon={<FaBookmark color="#808080" />}
            >
              Сохранить
            </ButtonAction>
            <RouteButton/>
          </CardActions>
        </CardDetails>
      </CardContainer>
    )
  );
};

export default DetailedCard;
