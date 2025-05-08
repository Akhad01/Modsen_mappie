import { RootState } from '..';

export const getMapRadius = (state: RootState) => state.map.radius;
export const getMapSettings = ({ map: { center, zoom } }: RootState) => ({
  center,
  zoom,
});
export const getLocation = (state: RootState) => state.map.positions;
export const getPlaces = (state: RootState) => state.map.places;
export const getUserLocation = (state: RootState) => state.map.userLocation
