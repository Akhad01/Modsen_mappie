import { RootState } from "..";

export const getFavorites = (state: RootState) => state.favorites.favorites
export const getLoadingToggleFavoritePlace = (state: RootState) => state.favorites.error
export const getCurrentPlaceStatus = (state: RootState) => ({
  error: state.favorites.errorToggleFavoritePlace,
  loading: state.favorites.loadingToggleFavoritePlace,
});