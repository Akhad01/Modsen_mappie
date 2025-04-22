import { PlacesService } from '../../../api/PlacesService';
import {createAsyncThunk} from '@reduxjs/toolkit';

import { RootState } from '../..';
import { SpecificPlace } from '../../../types/place-item';

export const getInfoAboutPlaceThunk = createAsyncThunk<SpecificPlace, void, { state: RootState }>(
    'sidebar/getInfoAboutPlaceThunk',
    async (_, thunkAPI) => {
        const id = thunkAPI.getState().sidebar.currentPlaceId;
        return await PlacesService.getPlaceById(id);
    },
    {dispatchConditionRejection: true},
);
