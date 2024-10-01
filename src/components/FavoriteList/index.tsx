import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Card from '../Card';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../../firebase';
import { ListWrapper } from './styled';
import { FavoriteItem } from '../../types/favorite-item';
import { setFavoriteItem } from '../../store/slices/sidebar-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getFavoriteItem } from '../../store/selectors/sidebar-selector';

const FavoriteList = () => {
  const favorites = useAppSelector(getFavoriteItem)
  const [loading, setLoading] = useState(true)
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function getFavorites() {
      try {
        const auth = getAuth()
        const user = auth.currentUser

        if (!user) {
          throw new Error('Пользователь не авторизован');
        }

        const userId = user.uid

        const q = query(collection(db, "favorites"), where("userId", "==", userId))
        
        const querySnapshot = await getDocs(q)

        const favoritesList: FavoriteItem[] = []

        querySnapshot.forEach((doc) => {
          favoritesList.push({
            ...doc.data() as FavoriteItem
          })
        }) 

        dispatch(setFavoriteItem(favoritesList))
      } catch (error) {
        console.error("Ошибка при получении избранных элементов: ", error);
      } finally {
        setLoading(false)
      }
    }

    getFavorites()
  }, [])

  if (loading) {
    return <div>Загрузка...</div>
  }

  return (
    <Box>
      <Typography variant="h5">Избранное:</Typography>
      <ListWrapper>
        {favorites.map((item, index) => (
          <Card key={index} id={item.id} title={item.name} description={item.description}  />
        ))}
      </ListWrapper>
    </Box>
  );
};

export default FavoriteList;
