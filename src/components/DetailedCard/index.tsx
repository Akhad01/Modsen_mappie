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
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

// test 
import { getAuth } from "firebase/auth"


// ------>

const DetailedCard = () => {
  const placeId = useAppSelector(getCurrentPlaceId);
  const places = useAppSelector(getPlaces);

  const [currentPlace, setCurrentPlace] = useState<PlaceItem | null>(null);

  const handleAddToFavorites = async () => {
    try {
      const auth = getAuth()
      const user = auth.currentUser

      if (!user) {
        throw new Error('Пользователь не авторизован')
      }

      const userId = user.uid

      const q = query(
        collection(db, "favorites"),
        where("userId", "==", userId),
        where("id", "==", currentPlace?.id)
      )

      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        console.log("Место уже избранном")
        return
      }

      const docRef = await addDoc(collection(db, "favorites"), {
        ...currentPlace,
        addedAt: new Date(),
        userId: userId
      })

      console.log("Документ добавлен с ID: ", docRef.id);
    } catch (error) {
      console.error("Ошибка при добавлении в избранное: ", error);
    }
  }

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
              onClick={handleAddToFavorites}
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
