export type PlaceKind = 'nature' | 'culture' | 'historic' | 'religion' | 'architecture'
    | 'industrial' | 'avocation' | 'sport' | 'adult' | 'food' | 'cafe' | 'bank' | 'sleep' | 'unknown';

export interface PlaceItem {
  id: number;
  position: [number, number];
  name: string;
  hours?: string;
  type: PlaceKind;
}
