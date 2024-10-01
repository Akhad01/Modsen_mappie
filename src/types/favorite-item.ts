import { PlaceItem } from "./place-item";

export interface FavoriteItem extends PlaceItem {
    userId: string;
    addedAt: Date;
}