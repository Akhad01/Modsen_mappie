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

export interface ISpecificPlace {
  place: PlaceItem,
  saved: boolean
}