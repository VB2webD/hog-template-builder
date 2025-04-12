import {ItemEntity} from "./itemEntity.ts";
import {Race} from "../features/Towers/towerData.ts";

export type TowerEntity = {
    name: string;
    image: string;
    tier: number
    items: (ItemEntity| null)[];
    slots: number;
    race: Race

}