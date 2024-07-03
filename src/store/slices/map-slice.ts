import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  radius: 1000,
  center: [41, 69],
  zoom: 15,
  positions: [null, null],
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setRadius: (state, action) => {
      state.radius = action.payload;
    },
    setPosition: (state, action) => {
      state.positions = action.payload;
    },
    setMapSettings: (state, action) => {
      state.center = action.payload.center;
      state.zoom = action.payload.zoom;
    },
    setCenterPosition: (state, action) => {
      state.center = action.payload;
    },
  },
});

export const { setRadius, setPosition, setMapSettings, setCenterPosition } =
  mapSlice.actions;

export default mapSlice.reducer;
