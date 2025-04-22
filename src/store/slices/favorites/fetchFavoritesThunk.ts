import { createAsyncThunk } from "@reduxjs/toolkit";
import { FavoritesService } from "../../../api/FavoritesService";
import { FavoritePlace } from "../../../types/place-item";

export const fetchFavoritesThunk = createAsyncThunk<FavoritePlace[]>(
    'favorites/fetchFavorites',
    async () => await FavoritesService.getFavoritePlaces(),
    { dispatchConditionRejection: true }
)