import { createSlice } from '@reduxjs/toolkit';
import { PlaceItem } from '../../types/place-item';

interface MapState {
  radius: number;
  center: [number, number];
  zoom: number;
  positions: [number, number] | [null, null];
  places: PlaceItem[];
}

const initialState: MapState = {
  radius: 5000,
  center: [41, 69],
  zoom: 10,
  positions: [null, null],
  places: [],
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
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
  },
});

export const {
  setRadius,
  setPosition,
  setMapSettings,
  setCenterPosition,
  setPlaces,
} = mapSlice.actions;

export default mapSlice.reducer;
