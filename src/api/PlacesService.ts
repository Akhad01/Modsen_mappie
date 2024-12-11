import {axiosInstance} from './AxiosInstance';
import { urls } from '../constants/urls';
import axios from 'axios';

import type { ISpecificPlace } from '../types/place-item';
import type { IPlaceWithoutDescription } from '../types/place-item';
import { PlaceKind } from '../types/place-item';


interface IGetPlacesParams {
    lat: number,
    lon: number,
    radius: number,
    filter:  PlaceKind[]
}

export class PlacesService {
    public static async getPlaces({lat, lon, filter, radius}: IGetPlacesParams) {
        const {data} = await axios.get<IPlaceWithoutDescription[]>(urls.getUrlGetPlaces(lat, lon, radius, filter));
        return data;
    }

    public static async getPlaceById(id: number) {
        const {data} = await axiosInstance.get<ISpecificPlace>(urls.getUrlGetPlaceById(id));
        return data;
    }
}
