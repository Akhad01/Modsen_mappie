import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { PlaceItem, PlaceKind } from "../../../types/place-item";
import { PlacesService } from "../../../api/PlacesService";

export const getPlacesThunk = createAsyncThunk<PlaceItem[], void, { state: RootState }>(
    "map/getPlaces",
    async (_, { getState }) => {
        const state = getState() as RootState
        const { radius, positions } = state.map
        const { categories } = state.sidebar
        const filteredCategories: PlaceKind[] = categories
            .map(category => category.type)
            .filter((type): type is PlaceKind => 
                [
                    'nature', 'culture', 'historic', 'religion', 'architecture', 
                    'industrial', 'avocation', 'sport', 'adult', 'food', 
                    'cafe', 'bank', 'sleep', 'unknown'
                ].includes(type)
            );

        if (!positions[0] || !positions[1]) return [];

        return await PlacesService.getPlaces({ lat: positions[0], lon: positions[1], radius, filter: filteredCategories });
    },
    {dispatchConditionRejection: true},
)


