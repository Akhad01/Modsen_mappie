import { createSlice } from "@reduxjs/toolkit";

import { fetchFavoritesThunk } from './fetchFavoritesThunk';
import { addToFavoritesThunk } from './addToFavoritesThunk';
import { FavoritePlace } from '../../../types/place-item';

interface FavoritesState {
    favorites: FavoritePlace[];
    loading: boolean;
    error: string | null;
    resultTogglePlace: 'added' | 'delete' | '';
    loadingToggleFavoritePlace: boolean;
    errorToggleFavoritePlace: string | null ;
    isFavoriteToggledSuccess: boolean;
}

const initialState: FavoritesState = {
    favorites: [],
    loading: false,
    error: null,

    resultTogglePlace: '',
    loadingToggleFavoritePlace: false,
    errorToggleFavoritePlace: null,
    isFavoriteToggledSuccess: false
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToFavoritesThunk.pending, (state) => {
                state.loadingToggleFavoritePlace = true
                state.errorToggleFavoritePlace = null
                state.isFavoriteToggledSuccess = false
            })
            .addCase(addToFavoritesThunk.fulfilled, (state, action) => {
                state.loadingToggleFavoritePlace = false
                state.resultTogglePlace = action.payload.added ? 'added' : 'delete'
                state.isFavoriteToggledSuccess = true
            })
            .addCase(addToFavoritesThunk.rejected, (state, action) => {
                state.loadingToggleFavoritePlace = false
                state.errorToggleFavoritePlace = action.payload as string
                state.isFavoriteToggledSuccess = false
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