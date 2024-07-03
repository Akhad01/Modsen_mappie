import { RootState } from '..';

export const getMapRadius = (state: RootState) => state.map.radius;
export const getMapSettings = ({ map: { center, zoom } }: RootState) => ({
  center,
  zoom,
});
