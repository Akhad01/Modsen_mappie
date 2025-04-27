import React, { useCallback } from 'react'
import { FaBookmark } from 'react-icons/fa6';

import { ButtonAction } from './styled'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addToFavoritesThunk } from '../../store/slices/favorites/addToFavoritesThunk'
import { getCurrentPlaceId, getCurrentPlaceSaved } from '../../store/selectors/sidebar-selector'
import { useSelector } from 'react-redux';
import { getCurrentPlaceStatus } from '../../store/selectors/favorites-selector';
import { getUser } from '../../store/selectors/user-selector';

const PlaceSaveToggle = () => {
  const dispatch = useAppDispatch()

  const currentPlaceId = useAppSelector(getCurrentPlaceId)
  const saved = useAppSelector(getCurrentPlaceSaved)
  const { loading } = useSelector(getCurrentPlaceStatus)
  const user = useAppSelector(getUser)

  const handleAddToFavorites = useCallback(() => {
    dispatch(addToFavoritesThunk(currentPlaceId))
  }, [addToFavoritesThunk, currentPlaceId])

  const buttonText = loading ? 'Загрузка...' : saved ? 'Удалить' : 'Сохранить'
  const isDisabled = user === null || loading

  return (
    <ButtonAction
      onClick={handleAddToFavorites}
      variant="outlined"
      disabled={isDisabled}
      startIcon={<FaBookmark color="#808080" />}
    >
      { buttonText }
    </ButtonAction>
  )
}

export default PlaceSaveToggle