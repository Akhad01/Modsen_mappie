import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../../constants/categories';

const initialState = {
  selectedNav: null,
  categories: categories,
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
  },
});

export const { setSelectedNav, toggleItemCategories } = sidebarSlice.actions;

export default sidebarSlice.reducer;
