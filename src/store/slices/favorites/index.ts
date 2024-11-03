import { FavoriteItem } from './../../../types/favorite-item';
import { createSlice } from "@reduxjs/toolkit";
import { deleteFavoriteByName } from './deleteFavoriteByNameThunk';
import { fetchFavorites } from './fetchFavoritesThunk';
import { addToFavorites } from './addToFavoritesThunk';

interface FavoritesState {
    items: FavoriteItem[];
    loading: boolean;
    error: string | null;
}

const initialState: FavoritesState = {
    items: [],
    loading: false,
    error: null
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavorites.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFavorites.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchFavorites.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
        builder
            .addCase(addToFavorites.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToFavorites.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload as string
            })
            .addCase(addToFavorites.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
        builder
            .addCase(deleteFavoriteByName.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteFavoriteByName.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(item => !action.payload.includes(item.id));
            })
            .addCase(deleteFavoriteByName.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
})

export default favoritesSlice.reducer