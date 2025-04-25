import React, { useEffect } from 'react';
import { Alert, Box, Paper, Typography } from '@mui/material';
import Card from '../Card';
import { ListWrapper } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getFavorites } from '../../store/selectors/favorites-selector';
import { fetchFavoritesThunk } from '../../store/slices/favorites/fetchFavoritesThunk';
import { getUser } from '../../store/selectors/user-selector';

const FavoriteList = () => {
  const favorites = useAppSelector(getFavorites)
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFavoritesThunk())
  }, [])

  if (!user) {
    return (
      <Paper>
          <Alert severity="info">
              Для использования закладок необходимо авторизоваться
          </Alert>
      </Paper>
    )
  }

  return (
    <Box>
      <Typography variant="h5">Избранное:</Typography>
      <ListWrapper>
        {favorites && favorites.map((item, index) => (
          <Card key={index} id={item.id} title={item.tags.name} description={item.tags.description}  />
        ))}
      </ListWrapper>
    </Box>
  );
};

export default FavoriteList;
