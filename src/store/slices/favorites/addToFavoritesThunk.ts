import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToggleFavoritePlaceResponse } from "../../../types/place-item";
import { FavoritesService } from "../../../api/FavoritesService";

export const addToFavoritesThunk = createAsyncThunk<ToggleFavoritePlaceResponse, number>(
    'favorites/addToFavorites',
    async (placeId) => await FavoritesService.toggleFavoritePlace(placeId) as ToggleFavoritePlaceResponse,
    { dispatchConditionRejection: true }
)