import type { PlaceKind } from "../types/place-item";

export const BASE_URL = import.meta.env.VITE_REACT_APP_BACK_END;

export const urls = {
    getUrlGetPlaces: (lat: number, lon: number, radius: number, categories: PlaceKind[]) => `${BASE_URL}/places?latitude=${lat}&longitude=${lon}&radius=${radius}&categories=${categories.join(',')}`,
    getUrlGetPlaceById: (id: number) => `${BASE_URL}/place/${id}`,

    login: `${BASE_URL}/auth/login`,
    signup: `${BASE_URL}/auth/signup`,
    checkAuth: `${BASE_URL}/auth/check-auth`,
    refresh: `${BASE_URL}/refresh`,
    logout: `${BASE_URL}/logout`,

    getFavoritePlaces: `${BASE_URL}/favorites/favorite-places`,
    toggleFavoritePlace: `${BASE_URL}/favorites/toggle-favorite-place`,
};
