import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../..";
import { filtersByCategory } from "../../../constants/filters-by-category";
import { LocationTransformService } from "../../../utils/locationTransformService";
import { PlaceItem } from "../../../types/place-item";

const categories = Object.keys(filtersByCategory);

const generateQueryString = (radius: number, latitude: number | null, longitude: number | null) => {
    return `[out:json];
    (${categories.map(category => { 
        if (!filtersByCategory[category]) return '';
        const { and, or, exclude } = filtersByCategory[category];
        const filters = [
            ...and.map(condition => condition.values.length ? condition.values.map(v => `["${condition.field}"="${v}"]`).join('') : `["${condition.field}"]`),
            ...or.map(condition => `["${condition.field}"~"${condition.values.join('|')}"]`),
            ...exclude.map(condition => condition.values.map(v => `["${condition.field}"!="${v}"]`).join(''))
        ].join('');
        
        return `node(around:${radius},${latitude},${longitude})${filters};`;;
    }).join('')});
    out center;
`
}

export const getPlacesThunk = createAsyncThunk<PlaceItem[], void, { state: RootState, rejectValue: string }>(
    "map/getPlaces",
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState()
            const { radius, positions } = state.map
            
            const queryString = generateQueryString(radius, positions[0], positions[1])

            const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(queryString)}`
            const response = await axios.get(url)

            const result = response.data.elements

            const locationService = new LocationTransformService()
            
            const transformedLocations = locationService.convertLocationsWithoutDescription(result, categories);

            return transformedLocations
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('Unknown error');
            }
        }
    }
)
