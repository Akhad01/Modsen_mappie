import { createSlice } from '@reduxjs/toolkit';
import { typeFilter } from '../../constants/categories';

interface Places {
  name: string;
  lat: number;
  lon: number;
  type: string;
}

interface MapState {
  radius: number;
  center: [number, number];
  zoom: number;
  positions: [number, number] | [null, null];
  typeFilter: string[];
  places: Places[];
}

const initialState: MapState = {
  radius: 1000,
  center: [41, 69],
  zoom: 15,
  positions: [null, null],
  typeFilter: typeFilter,
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
