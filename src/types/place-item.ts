export type PlaceKind = 'nature' | 'culture' | 'historic' | 'religion' | 'architecture'
    | 'industrial' | 'avocation' | 'sport' | 'adult' | 'food' | 'cafe' | 'bank' | 'sleep' | 'unknown';

export interface PlaceItem {
  id: number;
  position: [number, number];
  name: string;
  hours?: string;
  type: PlaceKind;
}

export interface IPlaceWithoutDescription {
  id: number,
  position: [number, number],
  name: string,
  type: PlaceKind
}

export interface FavoritePlace {
  id: number;
  position: [number, number],
  tags: { [key: string]: string },
  type: PlaceKind
}

export interface ToggleFavoritePlaceResponse {
  added: boolean,
  deleted: boolean,
}

export interface SpecificPlace {
  place: FavoritePlace,
  saved: boolean
}