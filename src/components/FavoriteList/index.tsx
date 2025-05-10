import React, { useEffect } from 'react';
import { Alert, Box, Paper, Stack, Typography } from '@mui/material';
import Card from '../Card';
import { ListWrapper, SkeletonCircle, SkeletonItem, SkeletonTextLarge, SkeletonTextSmall } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getFavorites } from '../../store/selectors/favorites-selector';
import { fetchFavoritesThunk } from '../../store/slices/favorites/fetchFavoritesThunk';
import { getUser } from '../../store/selectors/user-selector';

const FavoriteList = () => {
  const { favorites, error, loading } = useAppSelector(getFavorites)
  const user = useAppSelector(getUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFavoritesThunk())
  }, [])

  if (loading) {
    const item = [...Array(4)]
    return (
      <>
        <Stack spacing={2}>
          {
            item.map((_, key) => (
              <SkeletonItem key={key} >
                <Box>
                  <SkeletonTextLarge />
                  <SkeletonTextSmall />
                </Box>
                <SkeletonCircle />
              </SkeletonItem>
            ))
          }
        </Stack>
      </>
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
