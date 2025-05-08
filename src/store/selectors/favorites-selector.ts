import { RootState } from "..";

export const getFavorites = ({favorites: { favorites, error, loading } }: RootState) => ({ favorites, error, loading })
export const getLoadingToggleFavoritePlace = (state: RootState) => state.favorites.error
export const getCurrentPlaceStatus = (state: RootState) => ({
  error: state.favorites.errorToggleFavoritePlace,
  loading: state.favorites.loadingToggleFavoritePlace,
});