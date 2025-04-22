import { createSlice } from "@reduxjs/toolkit";

import { fetchFavoritesThunk } from './fetchFavoritesThunk';
import { addToFavoritesThunk } from './addToFavoritesThunk';
import { FavoritePlace } from '../../../types/place-item';

interface FavoritesState {
    favorites: FavoritePlace[];
    loading: boolean;
    error: string | null;
    resultTogglePlace: 'added' | 'delete' | ''
}

const initialState: FavoritesState = {
    favorites: [],
    loading: false,
    error: null,
    resultTogglePlace: ''
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToFavoritesThunk.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(addToFavoritesThunk.fulfilled, (state, action) => {
                state.loading = false
                state.resultTogglePlace = action.payload.added ? 'added' : 'delete'
            })
            .addCase(addToFavoritesThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
        builder
            .addCase(fetchFavoritesThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFavoritesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.favorites = action.payload 
            })
            .addCase(fetchFavoritesThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
})

export default favoritesSlice.reducer