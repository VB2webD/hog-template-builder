import {ItemEntity} from "./itemEntity.ts";

export type TowerEntity = {
    name: string;
    image: string;
    items: (ItemEntity| null)[];
    slots: number;

}