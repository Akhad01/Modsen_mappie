import { createSlice } from '@reduxjs/toolkit';
import { getPlacesThunk } from './getPlacesThunk';
import { PlaceItem } from '../../../types/place-item';

export interface MapState {
  radius: number;
  center: [number, number];
  zoom: number;
  positions: [number, number] | [null, null];
  places: PlaceItem[];
  loading: boolean;
  error: string | null;
}

const initialState: MapState = {
  radius: 1000,
  center: [41, 69],
  zoom: 10,
  positions: [null, null],

  places: [],
  loading: false,
  error: null
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
    // setPlaces: (state, action) => {
    //   state.places = action.payload;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getPlacesThunk.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(getPlacesThunk.fulfilled, (state, action) => {
        state.loading = false
        state.places = action.payload;
      })
      .addCase(getPlacesThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? "Поизошла ошибка"
      })
  },
});

export const {
  setRadius,
  setPosition,
  setMapSettings,
  setCenterPosition,
  // setPlaces,
} = mapSlice.actions;

export default mapSlice.reducer;
