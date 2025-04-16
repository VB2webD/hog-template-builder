import {EquipmentEntity} from "../../entities/EquipmentEntity.ts";

export enum EquipmentType {
    Armor,
    Weapon,
    Wisp,
    Revenant,
    RaceTower,
    RaceSummoner,
    Ship
}

export function displayEquipmentType(type: EquipmentType): string {
    return EquipmentType[type].replace(/([A-Z])/g, " $1").trim();
}


const {Weapon} = EquipmentType
export const equipmentData: Record<number, EquipmentEntity> = {
    0: {name: "Stardust Rod", image: "", type:Weapon, bonus:"", cost:"300 Soul Gems(locked)", skill:"Magically binds a target enemy unit. So that it can not move or attack and deals 360 damage/s for 15 seconds."},
    1: {name: "Lightning Staff", image: "", type: Weapon, bonus:"", cost:"300 Soul Gems (locked)", skill: "Deal [(Wave-1 * 100) + Previous Wave] damage and removes all buffs from a target unit. Enemy Units are also immobilized for 3 seconds and their movement speed is reduced by a factor of 3. They slowly regain movement speed over 9 seconds [Wave 1 - 500 dmg][Wave 2 - 600 dmg][Wave 3 - 800 dmg]"},
    2: {name: "Thor Rod", image: "", type: Weapon, bonus:"", cost:"450 Soul Gems (locked)", skill: "Renew: Refresh Secret Tower and Pocket Factory, same effect as Ghost Key"},
    3: {name: "Chill Rod", image: "", type: Weapon, bonus:"Increases Stun/Silence resistance by 10% for all towers, slows enemy units movement speed by 10% (Range 1200)", cost:"500 Soul Gems (locked)", skill: "Freezing Breath: Within 480 range, freezes enemies for 5 seconds and removes stun/silence effects from allied towers"},
    4: {name: "Flame Rod", image: "", type: Weapon, bonus:"Firelord spawnrate increased by 15%", cost:"500 Soul Gems (locked)", skill: "Inner Fire: Buffs all nearby units with 50% damage and 25mana/sec. Duration 10 seconds"},

}