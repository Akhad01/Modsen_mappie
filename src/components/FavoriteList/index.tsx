import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Card from '../Card';
import { items } from './config';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { PlaceItem } from '../../types/place-item';
import { ListWrapper } from './styled';

interface FavoriteItem extends PlaceItem {
  userId: string;
  addedAt: Date;
}

const FavoriteList = () => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])
  const [loading, setLoading] = useState(true)

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

        setFavorites(favoritesList)
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
