import React, { useEffect } from 'react';
import { Alert, Avatar, Box, CardActions, Paper, Skeleton, Stack, Typography } from '@mui/material';

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

  const { currentPlace, error, loading } = useAppSelector(getCurrentPlace)
  const currentPlaceId = useAppSelector(getCurrentPlaceId)

  useEffect(() => {
    dispatch(getInfoAboutPlaceThunk())
  }, [getInfoAboutPlaceThunk, currentPlaceId])

  if (loading) {
    return (
      <Paper sx={{
        padding: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
        width: 300
      }}>
        <Stack spacing={2}>
          <Skeleton variant='circular' height={30} width={30} />
          <Skeleton variant='text' width='60%' height={30} />
          <Skeleton variant='text' width='80%' height={20} />
          <Box display='flex' justifyContent='center' gap={2} >
            <Skeleton variant='rectangular' width={90} height={36} />
            <Skeleton variant='rectangular' width={90} height={36} />
          </Box>
        </Stack>
      </Paper>
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
