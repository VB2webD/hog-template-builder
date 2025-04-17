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


const {Armor,Weapon, Wisp, Revenant, RaceTower,RaceSummoner, Ship} = EquipmentType
export const equipmentData: Record<number, EquipmentEntity> = {
    0: {name: "Magus Robe", image: "", type:Armor, bonus:"+2 Rune upgrade Points", cost:"400 Soul Gems(Lock)"},
    1: {name: "Black Robe", image: "", type:Armor, bonus:"+2 Rune upgrade Points, 0%/4%/8% Spell damage", cost:"500 Soul Gems(Lock)", skill:""},
    2: {name: "Magic Robe", image: "", type:Armor, bonus:"+3 Rune upgrade Points, 0%/6%/12% Spell damage", cost:"600 Soul Gems(Lock)", skill:""},
    3: {name: "Luminous Robe", image: "", type:Armor, bonus:"+4 Rune upgrade Points, unlocks rune Tome of Intelligence, 0%/10%/10% spell damage, 0/0/1 summon duration, 0/0/4% perfect summon", cost:"800 Soul Gems(Lock)", skill:""},
    4: {name: "Gaia Gear", image: "", type:Armor, bonus:"+4 Rune upgrade Points, unlocks rune Tome of Agility, 0%/3%/3% crit chance, 0%/7%/7% crit damage, Stun/Silence Resistance 0%/0%/7%", cost:"800 Soul Gems(Lock)"},
    5: {name: "Maximillian", image: "", type:Armor, bonus:"+4 Rune upgrade Points,unlocks rune Tome of Strength, increases race chance Human/Orc/Elf/Undead buy 0%/6%/6% Stun/Silence Resistance 0%/0%/15%", cost:"800 Soul Gems(Lock)"},
    6: {name: "Light Coat", image: "", type:Armor, bonus:"+5 Rune upgrade Points, unlocks rune Tome of Intelligence, 0%/15%/15% spell damage, 0/0/1.5 summon duration, 0/0/7% perfect summon", cost:"1000 Soul Gems(Lock)"},
    7: {name: "Dark Chestguard", image: "", type:Armor, bonus:"+5 Rune upgrade Points, unlocks rune Tome of Agility, 0%/4%/4% crit chance, 0%/10%/10% crit damage, Stun/Silence Resistance 0%/0%/10%", cost:"1000 Soul Gems(Lock)"},

    8: {name: "Stardust Rod", image: "", type:Weapon, bonus:"", cost:"300 Soul Gems(Lock)", skill:"Magically binds a target enemy unit. So that it can not move or attack and deals 360 damage/s for 15 seconds."},
    9: {name: "Lightning Staff", image: "", type: Weapon, bonus:"", cost:"300 Soul Gems (Lock)", skill: "Deal [(Wave-1 * 100) + Previous Wave] damage and removes all buffs from a target unit. Enemy Units are also immobilized for 3 seconds and their movement speed is reduced by a factor of 3. They slowly regain movement speed over 9 seconds [Wave 1 - 500 dmg][Wave 2 - 600 dmg][Wave 3 - 800 dmg]"},
    10: {name: "Thor Rod", image: "", type: Weapon, bonus:"", cost:"450 Soul Gems (Lock)", skill: "Renew: Refresh Secret Tower and Pocket Factory, same effect as Ghost Key"},
    11: {name: "Chill Rod", image: "", type: Weapon, bonus:"Increases Stun/Silence resistance by 10% for all towers, slows enemy units movement speed by 10% (Range 1200)", cost:"500 Soul Gems (Lock)", skill: "Freezing Breath: Within 480 range, freezes enemies for 5 seconds and removes stun/silence effects from allied towers"},
    12: {name: "Flame Rod", image: "", type: Weapon, bonus:"Firelord spawnrate increased by 15%", cost:"500 Soul Gems (Lock)", skill: "Inner Fire: Buffs all nearby units with 50% damage and 25mana/sec. Duration 10 seconds"},

    13:{name:"Water Elemental", image:"/equipment/wisp/wispWaterElemental.webp", type:Wisp, bonus:"Increases towers maximum mana by 100/200/400", cost:""},
    14:{name:"Treant", image:"/equipment/wisp/wispTreant.webp", type:Wisp, bonus:"Increases periodic wood income by 1/2/3", cost:"500 Soul Gems (Lock)"},
    15:{name:"Mur'gul Slave", image:"/equipment/wisp/wispMurloc.webp", type:Wisp, bonus:"Provides 1/2/3 food cap and increase the number of identical Towers to 3, removes murloc huts 1/2", cost:"500 Soul Gems (Lock)"},
    16:{name:"Pack Horse", image:"/equipment/wisp/wispPackhorse.webp", type:Wisp, bonus:"Increases periodic gold income by 60/120/180, gold recieved by Gold Coin Monsters(Monster level * 3), +1 Pack horse from challange, + 20% gold from Peasant,", cost:"500 Soul Gems (Lock)"},
    17:{name:"Wagon", image:"/equipment/wisp/wispWagon.webp", type:Wisp, bonus:"", cost:"400 Soul Gems (Lock)", skill:"Retrain: Allows random Tier1/Tier2/Tier3 items to get a random stat increase of +25/+50/+100 Cooldown: 60s/90s/180s can be used multiple times on the same item"},
    18:{name:"Ghost", image:"/equipment/wisp/wispGhost.webp", type:Wisp, bonus:"", cost:"600 Soul Gems (Lock)", skill:"Creates a copy of an item, that cannot be sold 100% success Tier1, 50%/75%/100% Tier2, 10%/25%/50% Tier3, ancient/rebirth/unique items 0%/0%/25%"},
    19:{name:"Clockwork Goblin", image:"/equipment/wisp/wispGoblin.webp", type:Wisp, bonus:"", cost:"350 Soul Gems (Lock)", skill: "Creates a factory, can be randomly upgraded to 4 Tier1 towers and 20%/30%/40% off the cost of roll keys (Cooldown: 90s/60s/30s)"},

    20:{name: "Water Revenant (Royal)", image:"/equipment/revenant/revenantWater.webp", type:Revenant, cost: "", bonus:"Runes: Mage Adept Training, Spell Book Training, Long Rifles 1/2"},
    25:{name: "Light Revenant", image:"/equipment/revenant/revenantLight.webp", type:Revenant, cost: "", bonus:"Runes: Mage Adept Training, Spell Book Training, Long Rifles 1/2"},
    21:{name: "Air Revenant (Royal)", image:"/equipment/revenant/revenantAir.webp", type:Revenant, cost: "", bonus:"Runes: Mage Adept Training, Spell Book Training, Long Rifles 1/2"},
    22:{name: "Earth Revenant (Royal)", image:"/equipment/revenant/revenantEarth.webp", type:Revenant, cost: "", bonus:"Runes: Mage Adept Training, Spell Book Training, Long Rifles 1/2"},
    23:{name: "Fire Revenant (Royal)", image:"/equipment/revenant/revenantFire.webp", type:Revenant, cost: "", bonus:"Runes: Mage Adept Training, Spell Book Training, Long Rifles 1/2"},
    24:{name: "Air Revenant (Royal)", image:"/equipment/revenant/revenantAir.webp", type:Revenant, cost: "", bonus:"Runes: Mage Adept Training, Spell Book Training, Long Rifles 1/2"},
    26:{name: "Void Revenant", image:"/equipment/revenant/revenantVoid.webp", type:Revenant, cost: "", bonus:"Runes: Mage Adept Training, Spell Book Training, Long Rifles 1/2"},

    27:{name: "Human Summoner", image:"/equipment/raceSummoner/summonerHu.webp", type:RaceSummoner, cost:"1000 Soul Gems (Lock)", bonus:"10% Human Race chance, 15% Summon damage for all players"},
    28:{name: "Orc Summoner", image:"/equipment/raceSummoner/summonerOrc.webp", type:RaceSummoner, cost:"1000 Soul Gems (Lock)", bonus:"10% Orc Race chance, 15% Summon damage for all players"},
    29:{name: "Night Elf Summoner", image:"/equipment/raceSummoner/summonerNe.webp", type:RaceSummoner, cost:"1000 Soul Gems (Lock)", bonus:"10% Elf Race chance, 15% Summon damage for all players"},
    30:{name: "Undead Summoner", image:"/equipment/raceSummoner/summonerUd.webp", type:RaceSummoner, cost:"1000 Soul Gems (Lock)", bonus:"10% Undead Race chance, 15% Summon damage for all players"},

    31:{name: "Human Tower", image:"/equipment/raceTower/towerHu.webp", type:RaceTower, cost:"1000 Soul Gems (Lock)", bonus:"15% Human Race chance, 10% tower damage for all players"},
    32:{name: "Orc Tower", image:"/equipment/raceTower/towerOrc.webp", type:RaceTower, cost:"1000 Soul Gems (Lock)", bonus:"15% Orc Race chance, 10% tower damage for all players"},
    33:{name: "Night Elf Tower", image:"/equipment/raceTower/towerNe.webp", type:RaceTower, cost:"1000 Soul Gems (Lock)", bonus:"15% Night Elf Race chance, 10% tower damage for all players"},
    34:{name: "Undead Tower", image:"/equipment/raceTower/towerUd.webp", type:RaceTower, cost:"1000 Soul Gems (Lock)", bonus:"15% Undead Race chance, 10% tower damage for all players"},

    35: {name: "Human Battleship", image: "/equipment/ship/shipHuman.webp", type:Ship, bonus:" 5% Human chance, 5% damage", cost:"300 Medals", skill:""},
    36: {name: "Orc Juggernaut", image: "/equipment/ship/shipOrc.webp", type:Ship, bonus:" 5% Orc chance, 5% damage", cost:"300 Medals", skill:""},
    37: {name: "Night Elf Battleship", image: "/equipment/ship/shipElf.webp", type:Ship, bonus:" 5% Elf chance, 5% damage", cost:"300 Medals", skill:""},
    38: {name: "Undead Battleship", image: "/equipment/ship/shipUndead.webp", type:Ship, bonus:" 5% Undead chance, 5% damage", cost:"300 Medals", skill:""},
    39: {name: "Goblin Zeppelin", image: "/equipment/ship/shipZeppelin.webp", type:Ship, bonus:" 5% Neutral chance, 20% bounty from the hunts, -20% buying tower statue cost, +40% for selling tower statues", cost:"1500 Soul Gems (Lock)", skill:""},
}