import React, { useCallback } from 'react'
import { FaBookmark } from 'react-icons/fa6';

import { ButtonAction } from './styled'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addToFavoritesThunk } from '../../store/slices/favorites/addToFavoritesThunk'
import { getCurrentPlaceId, getCurrentPlaceSaved } from '../../store/selectors/sidebar-selector'
import { useSelector } from 'react-redux';
import { getCurrentPlaceStatus } from '../../store/selectors/favorites-selector';

const PlaceSaveToggle = () => {
  const dispatch = useAppDispatch()

  const currentPlaceId = useAppSelector(getCurrentPlaceId)
  const saved = useAppSelector(getCurrentPlaceSaved)
  const { loading } = useSelector(getCurrentPlaceStatus)

  const handleAddToFavorites = useCallback(() => {
    dispatch(addToFavoritesThunk(currentPlaceId))
  }, [addToFavoritesThunk, currentPlaceId])

  const isSaved = saved ? 'Удалить' : 'Сохранить'

  return (
    <ButtonAction
      onClick={handleAddToFavorites}
      variant="outlined"
      startIcon={<FaBookmark color="#808080" />}
    >
      { loading ? 'Загрузка...' : isSaved }
    </ButtonAction>
  )
}

export default PlaceSaveToggle