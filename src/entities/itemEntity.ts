import {ItemRestriction} from "../features/Items/itemData.ts";

export type ItemStats = { str: number, agi: number, int: number }

export enum ItemTags {
    Quick,
    Ancient,
    Potion,
    Slow,
    ArmorReduction,
    Summon,
    Aura,
    Reset,
    Active,
    Effect,
    Stun,
    Silence,
    Burn,
    Crit,
    Spell,
    ManaRegen,
    Unique,
    Heroic,
    Upgraded,
    Stack,
    AttackSpeed,
    AttackDamage,
    SkillUpgrade,
    LevelFive,
    LimitOne,
    Resistance
}

export interface ItemEntity {
    name: string;
    image: string;
    tier: 1 | 2 | 3 | 4; //4 = heroic
    tags: ItemTags[];
    restrictedTo: null | ItemRestriction;
    stats: ItemStats;
    passive: string;
    active?: string;
}
