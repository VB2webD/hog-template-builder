import {ItemEntity} from "./itemEntity.ts";

export type TowerEntity = {
    name: string;
    image: string;
    tier: number
    items: (ItemEntity| null)[];
    slots: number;

}