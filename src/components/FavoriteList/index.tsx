import React, { useEffect } from 'react';
import { Alert, Box, Paper, Skeleton, Stack, Typography } from '@mui/material';
import Card from '../Card';
import { ListWrapper } from './styled';
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
              <Paper
                key={key}
                elevation={2}
                sx={{
                  padding: '20px',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%'
                }}
              >
                <Box>
                  <Skeleton sx={{ marginBottom: '20px' }} variant='text' width={140} height={25} />
                  <Skeleton sx={{ marginBottom: '20px' }} variant='text' width={100} height={20} />
                </Box>
                <Skeleton sx={{ alignSelf: 'flex-end' }} variant='circular' width={24} height={24} />
              </Paper>
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
