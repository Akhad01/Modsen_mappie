import React, { useEffect } from 'react';
import { Alert, Paper, Stack } from '@mui/material';

import {
  CardActionsContainer,
  CardContainer,
  CardDescription,
  CardDetails,
  CardIcons,
  CardTitle,
  LoadingActions,
  LoadingAvatar,
  LoadingButton,
  LoadingContainer,
  LoadingSubtitle,
  LoadingTitle,
  PlaceAvatar,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getCurrentPlace, getCurrentPlaceId } from '../../store/selectors/sidebar-selector';
import { categoriesIcon } from '../../constants/categories';
import RouteButton from '../RouteButton';
import { getInfoAboutPlaceThunk } from '../../store/slices/sidebar/getInfoAboutPlaceThunk';
import PlaceSaveToggle from '../PlaceSaveToggle';
import { getIsFavoriteToggledSuccess } from '../../store/selectors/favorites-selector';

const DetailedCard = () => {
  const dispatch = useAppDispatch()

  const { currentPlace, error, loading } = useAppSelector(getCurrentPlace)
  const currentPlaceId = useAppSelector(getCurrentPlaceId)
  const isSuccess = useAppSelector(getIsFavoriteToggledSuccess)

  useEffect(() => {
    dispatch(getInfoAboutPlaceThunk())
  }, [getInfoAboutPlaceThunk, currentPlaceId, isSuccess])

  if (loading) {
    return (
      <LoadingContainer>
        <Stack spacing={2}>
          <LoadingAvatar />
          <LoadingTitle />
          <LoadingSubtitle />
          <LoadingActions >
            <LoadingButton />
            <LoadingButton />
          </LoadingActions>
        </Stack>
      </LoadingContainer>
    )
  } 

  if (error) {
    return (
      <Paper>
        <Alert severity="error">
            { error }
        </Alert>
      </Paper>
    )
  }

  return (
    currentPlace && (
      <CardContainer>
        <CardDetails>
          <CardIcons>
            <PlaceAvatar
              src={categoriesIcon[currentPlace.type]}
            />
          </CardIcons>
          <CardTitle variant="h5">{currentPlace.tags['name:ru'] ?? currentPlace.tags.name}</CardTitle>
          <CardDescription>
            {currentPlace.tags.opening_hours || 'Нет информации'}
          </CardDescription>
          <CardActionsContainer>
            <PlaceSaveToggle />
            <RouteButton/>
          </CardActionsContainer>
        </CardDetails>
      </CardContainer>
    )
  );
};

export default DetailedCard;
