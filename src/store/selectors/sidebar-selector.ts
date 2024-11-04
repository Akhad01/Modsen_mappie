import { RootState } from '..';

export const getActiveSidebar = (state: RootState) => state.sidebar.selectedNav;
export const getCategories = (state: RootState) => state.sidebar.categories;
export const getCurrentPlaceId = (state: RootState) =>
  state.sidebar.currentPlaceId;

export const getFavoriteItem = (state: RootState) => state.sidebar.favoritePlaces
export const getCurrentPlace = (state: RootState) => state.sidebar.currentPlace
