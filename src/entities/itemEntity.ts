import {ItemRestriction} from "../features/Items/restrictedItemData.ts";

export interface ItemEntity {
    name: string;
    image: string;
    tier: 1 | 2 | 3 | 4; // 4 is  heroic
    restrictedTo: null | ItemRestriction;
}
