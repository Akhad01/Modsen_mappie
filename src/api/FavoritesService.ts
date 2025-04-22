import type {AxiosResponse} from 'axios';

import {axiosInstance} from './AxiosInstance';
import { ToggleFavoritePlaceResponse } from './../types/place-item';
import type { FavoritePlace } from '../types/place-item';
import {urls} from '../constants/urls';

export class FavoritesService {
    public static async getFavoritePlaces() {
        const {data}: AxiosResponse<FavoritePlace[]> = await axiosInstance.get(urls.getFavoritePlaces, { withCredentials: true });
        return data;
    }

    public static async toggleFavoritePlace(placeId: number) {
        const {data} = await axiosInstance.post<ToggleFavoritePlaceResponse>(urls.toggleFavoritePlace, {placeId}, {withCredentials: true});
        return data;
    }
}
