import {ItemRestriction} from "../features/Items/restrictedItemData.ts";

export type ItemStats = { str: number, agi: number, int: number }

export enum ItemTags {
    Ancient,
    Potion,
    Slow,
    Armor,
    Summon,
    Aura,
    Reset,
    Active,
    Orb,
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
    skillUpgrade,
    LevelFive,
    LimitOne
}

export interface ItemEntity {
    name: string;
    image: string;
    tier: 1 | 2 | 3 | 4; // 4 is  heroic
    tags: ItemTags[];
    restrictedTo: null | ItemRestriction;
    stats: ItemStats;
    passive: string;
    active?: string;
}
