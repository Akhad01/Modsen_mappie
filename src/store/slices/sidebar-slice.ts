import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../constants/categories';
import { Category } from '../../types/category';
import { FavoriteItem } from '../../types/favorite-item';

interface SidebarState {
  selectedNav: string | null;
  categories: Category[];
  currentPlaceId: string | null;
  favoritePlaces: FavoriteItem[]
}

const initialState: SidebarState = {
  selectedNav: null,
  categories: categories,
  currentPlaceId: null,
  favoritePlaces: []
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSelectedNav: (state, action) => {
      state.selectedNav = action.payload;
    },
    toggleItemCategories: (state, action) => {
      state.categories.map((item) => {
        if (item.type === action.payload) {
          return (item.isActive = !item.isActive);
        }
        return item;
      });
    },
    setFavoriteItem: (state, action) => {
      state.favoritePlaces = action.payload
    },
    setPlaceIdAndShowSidebarPanel: (state, action) => {
      state.selectedNav = 'detail';
      state.currentPlaceId = action.payload;
    },
  },
});

export const {
  setSelectedNav,
  toggleItemCategories,
  setPlaceIdAndShowSidebarPanel,
  setFavoriteItem
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
