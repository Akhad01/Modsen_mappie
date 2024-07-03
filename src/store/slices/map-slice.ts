import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  radius: 1000,
  center: [65, 45],
  zoom: 15,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setRadius: (state, action) => {
      state.radius = action.payload;
    },
  },
});

export const { setRadius } = mapSlice.actions;

export default mapSlice.reducer;
