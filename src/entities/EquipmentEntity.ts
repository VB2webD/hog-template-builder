import {EquipmentType} from "../features/Equipment/equipmentData.ts";

export interface EquipmentEntity {
    name: string;
    image: string;
    type: EquipmentType;
    bonus: string;
    cost: string;
    skill?:string;
    roundTen?: string;
    roundTwenty?: string;
}


