import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../constants/categories';
import { Category } from '../../types/category';

interface SidebarState {
  selectedNav: string | null;
  categories: Category[];
  currentPlaceId: string | null;
}

const initialState: SidebarState = {
  selectedNav: null,
  categories: categories,
  currentPlaceId: null,
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
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
