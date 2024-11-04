import React, { useEffect } from 'react';
import { Avatar, CardActions, Typography } from '@mui/material';
import { FaBookmark } from 'react-icons/fa6';
import { getAuth } from "firebase/auth"
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import {
  ButtonAction,
  CardContainer,
  CardDetails,
  CardIcons,
  CardTitle,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getCurrentPlace, getCurrentPlaceId, getFavoriteItem } from '../../store/selectors/sidebar-selector';
import { getPlaces } from '../../store/selectors/map-selector';
import { PlaceItem } from '../../types/place-item';
import { categoriesIcon } from '../../constants/categories';
import { db } from '../../firebase';
import RouteButton from '../RouteButton';
import { setCurrentPlace } from '../../store/slices/sidebar-slice';

const DetailedCard = () => {
  const favorites = useAppSelector(getFavoriteItem)
  const placeId = useAppSelector(getCurrentPlaceId);
  const places = useAppSelector(getPlaces);

  const dispatch = useAppDispatch()

  const currentPlace = useAppSelector(getCurrentPlace)

  console.log("currentPlace", currentPlace);
  

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

      const allPlaces = !favorites ? [...places] : [...favorites, ...places]

      return allPlaces.find((place: PlaceItem) => place.id === placeId) || null;
    }

    dispatch(setCurrentPlace(fulterPlaces()));
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
          <Typography style={{ marginTop: '10px' }} variant="body2">
            {currentPlace.hours || 'Нет информации'}
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
