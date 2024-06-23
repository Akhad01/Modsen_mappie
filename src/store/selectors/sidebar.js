import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedNav: null,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSelectedNav: (state, action) => {
      state.selectedNav = action.payload;
    },
  },
});

export const { setSelectedNav } = sidebarSlice.actions;

export default sidebarSlice.reducer;
