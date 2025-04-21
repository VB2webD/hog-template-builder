import {ItemEntity, ItemTags} from "../../entities/itemEntity.ts";

export enum ItemRestriction {
    Tier1 = 1,
    Tier2 = 2,

    Kael = 'Kael',
    Uther = 'Uther',
    Mk = 'Mountain King',
    Ap = 'Admiral Proudmoore',

    Grom = 'Grom',
    Gul = 'Gul\'dan',
    Thrall = 'Thrall',

    Maiev = 'Maiev',
    Dh = 'Demon Hunter',
    Potm = 'Priestess of the Moon',
    Aol = 'Ancient of Lore',

    Lich = 'Lich',
    Cl = 'Crypt Lord',
    Dk = 'Death Knight',
    Archi = 'Archimonde',
    Kj = 'Kil\'jaeden',

    Medi = 'Medivh',
    Fl = 'Fire Lord',
    Marine = 'Marine',
    Illi = 'Illidan',
    Panda = 'Pandaren Brewmaster',
    Pit = 'Pitlord',
    Do = 'Dragonspawn Overseer',
}

const {Quick, Ancient, Potion, Slow, ArmorReduction, Summon, Aura, Reset, Active, Effect, Stun,Silence, Burn, Crit, Spell, ManaRegen, Unique,Heroic, Upgraded,Stack, AttackSpeed, AttackDamage, skillUpgrade, LevelFive, LimitOne, Resistance} = ItemTags
export const itemData: Record<number, ItemEntity> = {

    // Slow Auras
    0: { name: "Wand of the Wind", image: "/items/slow/slowT1.png", tier: 1, tags: [Quick, Slow, Aura],restrictedTo: null, stats: {str: 9, agi: 9, int: 9}, passive: "Slows nearby enemies by 10%" },
    1: { name: "Scepter of the Sea", image: "/items/slow/slowT2.png", tier: 2, tags: [Quick, Slow,Aura],restrictedTo: null, stats: {str: 18, agi: 18, int: 18}, passive: "Slows nearby enemies by 20%" },
    2: { name: "Staff of Negation", image: "/items/slow/slowT3.webp", tier: 3, tags: [Quick, Slow,Aura],restrictedTo: null, stats: {str: 36, agi: 36, int: 36}, passive: "Slows nearby enemies by 30%" },
    3: { name: "Staff of Negation", image: "/items/slow/slowT3.webp", tier: 3, tags: [Slow,Aura,Active, Upgraded],restrictedTo: null, stats: {str: 36, agi: 36, int: 36}, passive: "Slows nearby enemies by 30%", active: "150 random stat" },

    // -Armor Effects
    4: { name: "Orb of Darkness", image: "/items/-armor/orbT1.webp", tier: 1, tags: [Quick, ArmorReduction, Effect], restrictedTo: null, stats: { str:10, agi:10, int:5 }, passive: "Attacks reduce enemy armor by 2 for 5 seconds" },
    5: { name: "Orb of Corruption", image: "/items/-armor/orbT2.webp", tier: 2, tags: [Quick, ArmorReduction, Effect],restrictedTo: null, stats: { str:20, agi:20, int:10 }, passive: "Attacks reduce enemy armor by 4 for 5 seconds" },
    6: { name: "Wand of Shadowsight", image: "/items/-armor/armorAuraT2.png", tier: 2,tags: [Quick, ArmorReduction, Aura], restrictedTo: null, stats: { str:16, agi:16, int:16}, passive: "Reduces armor of nearby enemies by 4" },
    7: { name: "Phoenix Egg", image: "/items/-armor/armorAuraT3.webp", tier: 3, tags: [Quick, ArmorReduction, Aura],restrictedTo: null, stats: { str:32, agi:32, int:32 }, passive: "Reduces armor of nearby enemies by 6" },
    8: { name: "Phoenix Egg", image: "/items/-armor/armorAuraT3.webp", tier: 3, tags: [Quick, ArmorReduction, Aura, Active, Upgraded],restrictedTo: null, stats: { str:32, agi:32, int:32 }, passive: "Reduces armor of nearby enemies by 6", active: "150 random stat" },

    // summon auras
    9: { name: "Staff of Reanimation", image: "/items/summonAuras/summonAuraT2.png", tier: 2, tags: [Quick, Summon, Aura], restrictedTo: null,stats: { str:15, agi:15, int:15 }, passive: "Nearby summons/illusions gain +15% movement speed and 10% attack speed" },
    10: { name: "Scroll of the Unholy Legion", image: "/items/summonAuras/scrollOfUnholyLegion.webp", tier: 3, tags: [Quick, Summon, Aura],restrictedTo: null, stats: { str:30, agi:30, int:30 }, passive: "Nearby summons/illusions gain +20% movement speed and 15% attack speed" },
    11: { name: "Scroll of the Unholy Legion", image: "/items/summonAuras/scrollOfUnholyLegion.webp", tier: 3, tags: [Summon, Aura,Active, Upgraded],restrictedTo: null, stats: { str:30, agi:30, int:30 }, passive: "Nearby summons/illusions gain +20% movement speed and 15% attack speed", active:"150 random stat" },

    // attack summon
    12: { name: "Voodoo Doll", image: "/items/atkSummon/atkSummonT2.webp", tier: 2, tags: [Effect,Summon],restrictedTo: null, stats: { str:0, agi:10, int:40 }, passive: "The Hero's attacks have a 5% chance to summon 1 Hydra, that deals (Allstat) damage." },
    13: { name: "Razorspine Scales", image: "/items/atkSummon/atkSummonT3.webp", tier: 3, tags: [Effect,Summon],restrictedTo: null,  stats: { str:0, agi:20, int:80 }, passive: "The Hero's attacks have a 5% chance to summon 1 Ancient Hydra, that deals (Allstat) damage." },
    14: { name: "Razorspine Scales", image: "/items/atkSummon/atkSummonT3.webp", tier: 3, tags: [Effect,Summon, Active, Upgraded],restrictedTo: null,  stats: { str:0, agi:20, int:80 }, passive: "The Hero's attacks have a 5% chance to summon 1 Ancient Hydra, that deals (Allstat) damage." },

    // summon duration
    15: { name: "Diamond of Summoning", image: "/items/summonDuration/summonDurationT2.png",  tier: 2, tags: [Summon], restrictedTo: null, stats: { str:15, agi:15, int:15 }, passive: "Increases summon duration by 3 seconds" },
    16: { name: "Skullshield", image: "/items/summonDuration/summonDurationT3.webp", tier: 3, tags: [Quick, Summon], restrictedTo: null, stats: { str:30, agi:30, int:30 }, passive: "Increases summon duration by 5 seconds" },
    17: { name: "Skullshield", image: "/items/summonDuration/summonDurationT3.webp", tier: 3, tags: [Summon,Active, Upgraded], restrictedTo: null, stats: { str:30, agi:30, int:30 }, passive: "Increases summon duration by 5 seconds", active: "Take control of a summon/illusion and reset its duration to 20s" },

    // reset
    18: { name: "Shamanic Totem", image: "/items/reset/resetT2.webp", tier: 2, tags: [Spell, Reset], restrictedTo: null, stats: { str:0,agi:10, int:40 }, passive: "10% chance to reset cooldown on ability cast" },
    19: { name: "Arcane Scroll", image: "/items/reset/resetT3.webp", tier: 3, tags: [Quick, Spell, Reset], restrictedTo: null, stats: { str:0,agi:20, int:80 }, passive: "20% chance to reset cooldown on ability cast (does not work on Jaina)." },
    20: { name: "Arcane Scroll", image: "/items/reset/resetT3.webp", tier: 3, tags: [Quick, Spell,Reset, Active, Upgraded], restrictedTo: null, stats: { str:0,agi:20, int:80 }, passive: "20% chance to reset cooldown on ability cast (does not work on Jaina).", active: "Resets all cooldowns but reduces the cooldown reset effect by half for 30s" },

    // spelldmg
    21: { name: "Essence of Azune", image: "/items/spelldmg/spelldmgT2.webp", tier: 2, tags: [Spell], restrictedTo: null, stats: { str:14, agi:14, int:14 }, passive: "+20% spell damage" },
    22: { name: "Staff of Sanctuary", image: "/items/spelldmg/spelldmgT3.webp", tier: 3, tags: [Quick, Spell], restrictedTo: null, stats: { str:28, agi: 28, int:28 }, passive: "+40% spell damage" },
    23: { name: "Staff of Sanctuary", image: "/items/spelldmg/spelldmgT3.webp", tier: 3, tags: [Quick, Spell, Active, Upgraded], restrictedTo: null, stats: { str:28, agi:28, int:28 }, passive: "+40% spell damage", active: "Increases main stat by 15% for 6 seconds"},

    // stun
    24: { name: "Wand of Lightning", image: "/items/stun/stunT2.webp", tier: 2, tags:[Effect], restrictedTo: null, stats: { str:24, agi:12, int:12 }, passive: "8% chance to stun for 1.5s." },
    25: { name: "Searing Blade", image: "/items/stun/stunT3.webp", tier: 3,tags:[Effect], restrictedTo: null, stats: { str:52, agi:24, int:24 }, passive: "8% chance to stun for 1.5s and increases Strength by 40"},
    26: { name: "Searing Blade", image: "/items/stun/stunT3.webp", tier: 3,tags:[Effect, Active, Upgraded], restrictedTo: null, stats: { str:52, agi:24, int:24 }, passive: "8% chance to stun for 1.5s and increases Strength by 40", active: "Binds a target for 6s and deals (Strength * 2) damage every second" },

    // Resistance
    27: { name: "Arcanite Shield", image: "/items/resistance/stunResistT3.webp", tier: 3, tags:[Stun,Silence, Resistance],restrictedTo: null, stats: { str: 60, agi:20, int:20 }, passive: "Reduces stun effects by 30% and silence effects by 15%" },
    28: { name: "Arcanite Shield", image: "/items/resistance/stunResistT3.webp", tier: 3, tags:[Stun,Silence, Active, Upgraded, Resistance],restrictedTo: null, stats: { str: 60, agi:20, int:20 }, passive: "Reduces stun effects by 30% and silence effects by 15%", active: "Gains a shield that removes stun and prevents mana reduction for 6s" },
    29: { name: "Moon Armor", image: "/items/resistance/silenceResistT3.webp", tier: 3, tags:[Stun,Silence, Resistance],restrictedTo: null, stats: { str: 60, agi:20, int:20 }, passive: "Reduces stun effects by 30% and silence effects by 15%" },
    30: { name: "Moon Armor", image: "/items/resistance/silenceResistT3.webp", tier: 3, tags:[Stun,Silence, Active, Upgraded, Resistance],restrictedTo: null, stats: { str: 60, agi:20, int:20 }, passive: "Reduces stun effects by 30% and silence effects by 15%", active: "Gains 15% of max mana" },

    // general
    31: { name: "Gold Coins", image: "/items/goldCoin.webp", tier: 2, tags:[], restrictedTo: null, stats: { str: 16, agi: 16, int: 16 }, passive: "Killing a target has a 20% chance for a (Monster level * 2) gold bonus" },
    32: { name: "Mindstaff", image: "/items/mindStaff.webp", tier: 2, tags:[Spell, Aura, ManaRegen, Stack], restrictedTo: null, stats: { str:10, agi:10, int:30 }, passive: "Increases mana regeneration by 70% and grants mana regeneration to allied units within 480 range"},
    33: { name: "Magic Sentry", image: "/items/invisDetection.webp", tier: 2, tags:[Quick, Aura, Active],restrictedTo: null, stats: { str:18, agi:18, int:18 }, passive: "Reveals invisible units in a 1200 radius",active: "Reveals an area of the map that is cast upon for 16s, Also reveals invisible Units" },
    34: { name: "Shaman Claws", image: "/items/shamanClaws.png", tier: 3, tags:[Quick, Spell, ManaRegen, Stack],restrictedTo: null, stats: { str:24, agi:24, int:92 }, passive: "Increases int by 40 and mana regeneration by 50%",active: "Deals (Intelligence * 8) damage to a target and restores 5% mana of damage dealt" },
    35: { name: "Shaman Claws", image: "/items/shamanClaws.png", tier: 3, tags:[Spell, ManaRegen, Active, Upgraded,Stack],restrictedTo: null, stats: { str:24, agi:24, int:92 }, passive: "Increases int by 40 and mana regeneration by 50%",active: "Deals (Intelligence * 8) damage to a target and restores 5% mana of damage dealt" },
    36: { name: "Bloodfeather Heart", image: "/items/bloodfeatherHeart.webp", tier: 3, restrictedTo: null, tags:[Summon], stats: { str: 25, agi:25, int:40 }, passive: "Increases perfect summon by 35%" },
    37: { name: "Bloodfeather Heart", image: "/items/bloodfeatherHeart.webp", tier: 3, restrictedTo: null, tags:[Summon,Active,Upgraded], stats: { str: 25, agi:25,int:40 }, passive: "Increases perfect summon by 35%", active: "All nearby summons gain a 6hp shield in 1200 range" },
    38: { name: "Staff of Silence", image: "/items/staffOfSilence.webp", tier: 3, tags: [Quick, Crit],restrictedTo: null, stats: { str:20, agi:20 ,int:60 }, passive: "Increase crit chance by 25%" },
    39: { name: "Staff of Silence", image: "/items/staffOfSilence.webp", tier: 3, tags: [Crit, Active, Upgraded],restrictedTo: null, stats: { str:20, agi:20 ,int:60 }, passive: "Increase crit chance by 25%", active: "Consumes 50% mana, increases Attack speed by 400%" },
    40: { name: "Searing Bow", image: "/items/fieryBow.webp", tier: 3, tags:[Summon], restrictedTo: null,  stats: { str:20, agi:60 ,int:20 }, passive: "Summoned minions have 80% evasion penetration and deal 115% damage per attack" },
    41: { name: "Searing Bow", image: "/items/fieryBow.webp", tier: 3, tags:[Summon, Active, Upgraded, Aura], restrictedTo: null,  stats: { str:20, agi:60 ,int:20 }, passive: "Summoned minions have 80% evasion penetration and deal 115% damage per attack", active: "Increase attack speed of nearby summons/illusions by 75% for 5s in 1200 range" },
    42: { name: "Storm Hammers", image: "/items/stormHammer.webp", tier: 3, tags:[Effect, Spell], restrictedTo: null, stats: { str:20 ,agi: 0, int: 80 }, passive: "Using a skill has a 26% chance to deal (Intelligence * 6) damage to surrounding targets" },
    43: { name: "Storm Hammers", image: "/items/stormHammer.webp", tier: 3, tags:[Effect, Spell, Active, Upgraded], restrictedTo: null, stats: { str:20 ,agi: 0, int: 80 }, passive: "Using a skill has a 26% chance to deal (Intelligence * 6) damage to surrounding targets", active: "Deals (Intelligence * 8) damage to surrounding targets in 2040 range" },
    44: { name: "Chitinous Blade", image: "/items/chitBlade.png", tier: 3, tags:[Crit], restrictedTo: null, stats: { str: 20, agi:60, int: 20 }, passive: " Crit damage increased by 30%" },
    45: { name: "Chitinous Blade", image: "/items/chitBlade.png", tier: 3, tags:[Crit, Active, Upgraded], restrictedTo: null, stats: { str: 20, agi:60, int: 20 }, passive: " Crit damage increased by 30%",active: "Gains 100% crit chance for 4s" },
    46: { name: "Firehand Gauntlets", image: "/items/agiT2.webp", tier: 2, tags:[Effect], restrictedTo: null, stats: { str: 15, agi: 25, int: 0 }, passive: "Grants 15% chance to deal (Agility * 3) damage to nearby enemies" },
    47: { name: "Helm of Battlethirst", image: "/items/agiT3.webp", tier: 3, tags:[], restrictedTo: null, stats: { str: 10, agi: 130, int: 10 }, passive: "Increases agi by 50" },
    48: { name: "Helm of Battlethirst", image: "/items/agiT3.webp", tier: 3, tags:[Active,Upgraded], restrictedTo: null, stats: { str: 10, agi: 130, int: 10 }, passive: "Increases agi by 50", active: "Fires a beam dealing (Agility * 2.5) per second for 5s" },
    49: { name: "Serathil", image: "/items/axeT3.webp", tier: 3,tags:[AttackSpeed, AttackDamage], restrictedTo: null, stats: { str: 40, agi:40, int:20 }, passive: "Increases damage by 100 and attack speed by 35%" },
    50: { name: "Serathil", image: "/items/axeT3.webp", tier: 3,tags:[AttackSpeed, AttackDamage, Active, Upgraded], restrictedTo: null, stats: { str: 40, agi:40, int:20 }, passive: "Increases damage by 100 and attack speed by 35%", active: "Gains 80% chance to ignore targets evasion for 10s" },
    51: { name: "Shield of Honor", image: "/items/burnT3.webp", tier: 3, tags:[Burn], restrictedTo: null, stats: { str: 80, agi:20, int: 0 }, passive: "Deals (Strength * 2.4) damage to nearby land Units" },
    52: { name: "Shield of Honor", image: "/items/burnT3.webp", tier: 3, tags:[Burn, Active, Upgraded], restrictedTo: null, stats: { str: 80, agi:20, int: 0 }, passive: "Deals (Strength * 2.4) damage to nearby land Units", active: "Switches position with an allied tower" },
    53: { name: "Spiked Collar", image: "/items/spikedCollar.png", tier: 3, tags:[Burn], restrictedTo: null, stats: { str: 80, agi:20, int: 0 }, passive: "Heroes attack summon 1 Fel stalker that deals (Agility * 7) damage on kill 25%" },

    // Potions
    54: {name: "Potion of Myth", image: "/items/potions/rgbPot.webp", tier: 3, tags: [Quick, Potion, Summon], restrictedTo: null, stats: {str: 75, agi:75, int: 75}, passive:"Increase perfect summon chance by 35%"},
    55: {name: "Potion of Guile", image: "/items/potions/rrbPot.webp", tier: 3, tags: [Potion,Stun,Silence, Resistance],restrictedTo: null, stats: {str: 150, agi:0, int: 75}, passive: "Reduces stun/silent effects by 35% when worn"},
    56: {name: "Potion of Might", image: "/items/potions/rrgPot.webp", tier: 3,tags: [Potion, Effect], restrictedTo: null, stats: {str: 150, agi:75, int: 0}, passive: "Increase the attack damage of the Hero by 250 and increase the chance of ignoring target armor by 10% when worn"},
    57: {name: "Potion of Hush", image: "/items/potions/rrrPot.webp", tier: 3, tags: [Potion, Burn], restrictedTo: null, stats: {str: 225, agi:0, int: 0}, passive:"Engulfs the Hero in Fire which deals (Str * 2.8) damage per second to nearby enemy land units." },
    58: {name: "Potion of Bane", image: "/items/potions/ggrPot.webp", tier: 3, tags: [Potion, Crit],restrictedTo: null, stats: {str: 75, agi:150, int: 0}, passive: "Excellence damage increase by 45%"},
    59: {name: "Potion of Terror", image: "/items/potions/ggbPot.webp", tier: 3, tags: [Quick, Potion, Crit],restrictedTo: null, stats: {str: 0, agi:150, int: 75}, passive: "Increase chance to deal excellent damage by 35%"},
    60: {name: "Potion of Marvel", image: "/items/potions/gggPot.webp", tier: 3, tags: [Potion],restrictedTo: null, stats: {str: 0, agi:225, int: 0}, passive: "The Hero's attack have 15% chance of dealing explosion (Agi * 5) damage to nearby enemies"},
    61: {name: "Potion of Virtue", image: "/items/potions/bbrPot.webp", tier: 3, tags: [Quick, Potion, Spell],restrictedTo: null, stats: {str: 75, agi:0, int: 150}, passive: "Increase Spelldmg by 40%"},
    62: {name: "Potion of Faith", image: "/items/potions/bbgPot.webp", tier: 3, tags: [Quick, Potion, Reset],restrictedTo: null, stats: {str: 0, agi:75, int: 150}, passive: "Using a skill has a 25% chance to reset cooldown."},
    63: {name: "Potion of Psyche", image: "/items/potions/bbbPot.webp", tier: 3, tags: [Potion],restrictedTo: null, stats: {str: 0, agi:0, int: 225}, passive: "The Hero's attack have 15% chance of dealing explosion (Int * 5) damage to nearby enemies" },


    // ##### Restricted ###############################################

    // passiv skill Upgrades
    64: { name: "Ancient of Fire", image: "/items/orbs/orbRed.webp", tier: 1, tags: [Ancient, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Tier1, stats: {str:100, agi:0, int:0}, passive: "Increases passive skill +1" },
    65: { name: "Ancient of Venom", image: "/items/orbs/orbGreen.webp", tier: 1, tags: [Ancient, skillUpgrade, LevelFive,LimitOne], restrictedTo: ItemRestriction.Tier1, stats: {str:0, agi:100, int:0}, passive: "Increases passive skill +1" },
    66: { name: "Ancient of Frost", image: "/items/orbs/orbBlue.webp", tier: 1, tags: [Ancient, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Tier1, stats: {str:0, agi:0, int:100}, passive: "Increases passive skill +1" },
    67: { name: "Ank of Reincarnation", image: "/items/ank.webp", tier: 3, tags: [Ancient, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Tier2, stats: {str:0, agi:0, int:0}, passive: "Increases passive skill+1, 150 main attribute" },

    // Kael
    68: { name: "Gloves of Spell Mastery", image: "/items/uniques/human/kaelUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne, ArmorReduction], restrictedTo: ItemRestriction.Kael, stats: {str: 50, agi: 50, int: 100}, passive: "Increases passive Skill +1" },
    69: { name: "Gloves of Spell Mastery", image: "/items/uniques/human/kaelUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Kael, stats: {str: 50, agi: 50, int: 100}, passive:"Phoenix burns nearby targets, dealing (Intelligence * 3 + 100) damage per second."},

    // Uther
    70: { name: "Drek'thar's Spellbook", image: "/items/uniques/human/utherUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Uther, stats: {str: 100, agi: 50, int: 50}, passive: "Increases passive Skill +1" },
    71: { name: "Drek'thar's Spellbook", image: "/items/uniques/human/utherUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Uther, stats: {str: 100, agi: 50, int: 50}, passive:"Activating Divine Shield increases stun resistance for nearby allies by 25% for 5s (can be stacked with synergy)." },

    // Mountain King
    72: { name: "Bladebane Armor", image: "/items/uniques/human/mkUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Mk, stats: {str: 100, agi: 50, int: 50}, passive: "Increases passive Skill +1" },
    73: { name: "Bladebane Armor", image: "/items/uniques/human/mkUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Mk, stats: {str: 100, agi: 50, int: 50}, passive:"In the Avatar state, all attacks cannot miss." },

    // Admiral Proudmoore
    74: { name: "Orb of Annihilation", image: "/items/uniques/human/apUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Ap, stats: {str: 50, agi: 100, int: 50}, passive: "Increases passive Skill +1" },
    75: { name: "Orb of Annihilation", image: "/items/uniques/human/apUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Ap, stats: {str: 50, agi: 100, int: 50}, passive:"Monsters summoned from items receive benefits from summoning effects." },

    // Grom
    76: { name: "Hood of Cunning", image: "/items/uniques/orc/gromUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Grom, stats: {str: 50, agi: 100, int: 50}, passive: "Increases passive Skill +1" },
    77: { name: "Hood of Cunning", image: "/items/uniques/orc/gromUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Grom, stats: {str: 50, agi: 100, int: 50}, passive:"25 Agility stack gives 9.0% excellent damage." },

    // Gul'dan
    78: { name: "Skull of Gul'dan", image: "/items/uniques/orc/gulUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Gul, stats: {str: 100, agi: 50, int: 50}, passive: "Increases passive Skill +1" },
    79: { name: "Skull of Gul'dan", image: "/items/uniques/orc/gulUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Gul, stats: {str: 100, agi: 50, int: 50}, passive:"Activate synergy [Gul'dan - Orc Warlock], damage increases target's HP by a percentage (minimum increase of 25%)" },

    // Thrall
    80: { name: "Thunderbloom Bulb", image: "/items/uniques/orc/thrallUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Thrall, stats: {str: 50, agi: 50, int: 100}, passive: "Increases passive Skill +1" },
    81: { name: "Thunderbloom Bulb", image: "/items/uniques/orc/thrallUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Thrall, stats: {str: 50, agi: 50, int: 100}, passive: "Increases the damage range of Forked Lightning skill." },

    // Maiev
    82: { name: "Cloak of Shadows", image: "/items/uniques/elf/maievUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Maiev, stats: {str: 50, agi: 100, int: 50}, passive: "Increases passive Skill +1" },
    83: { name: "Cloak of Shadows", image: "/items/uniques/elf/maievUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Maiev, stats: {str: 50, agi: 100, int: 50}, passive: "The attack has a 15% chance of spawning a blood ritual that deals total damage (Agility * 6 + 200) over 2 times. The second or later Maiev increases dance damage by 25%." },

    // Demon Hunter
    84: { name: "Heart of Serianox", image: "/items/uniques/elf/dhUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Dh, stats: {str: 50, agi: 100, int: 50}, passive: "Increases passive Skill +1" },
    85: { name: "Heart of Serianox", image: "/items/uniques/elf/dhUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne],restrictedTo: ItemRestriction.Dh, stats: {str: 50, agi: 100, int: 50},  passive: "Has a 25% chance of permanently removing the target's evasion ability." },

    // Priestess of the Moon
    86: { name: "Horn of Cenarius", image: "/items/uniques/elf/potmUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Potm, stats: {str: 50, agi: 100, int: 50}, passive: "Increases passive Skill +1" },
    87: { name: "Horn of Cenarius", image: "/items/uniques/elf/potmUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Potm, stats: {str: 50, agi: 100, int: 50},  passive: "There is no limit to the number of Owls summoned per tower." },

    // Ancient of Lore
    88: { name: "Shimmerweed", image: "/items/uniques/elf/aolUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Aol, stats: {str: 50, agi: 50, int: 100}, passive: "Increases passive Skill +1" },
    89: { name: "Shimmerweed", image: "/items/uniques/elf/aolUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne],restrictedTo: ItemRestriction.Aol, stats: {str: 50, agi: 50, int: 100},  passive: "Reduced Fountain mana cost to 0.5%." },

    // Lich
    90: { name: "Book of the Dead", image: "/items/uniques/undead/lichUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Lich, stats: {str: 50, agi: 50, int: 100}, passive: "Increases passive Skill +1" },
    91: { name: "Book of the Dead", image: "/items/uniques/undead/lichUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Lich, stats: {str: 50, agi: 50, int: 100}, passive: "Coils of death are spawned right at the target location." },

    // Crypt Lord
    92: { name: "Spiked Shell", image: "/items/uniques/undead/clUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Cl, stats: {str: 50, agi: 100, int: 50}, passive: "Increases passive Skill +1" },
    93: { name: "Spiked Shell", image: "/items/uniques/undead/clUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Cl, stats: {str: 50, agi: 100, int: 50}, passive: "" },

    // Death Knight
    94: { name: "Legion Doom-Horn", image: "/items/uniques/undead/dkUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Dk, stats: {str: 100, agi: 50, int: 50}, passive: "Increases passive Skill +1" },
    95: { name: "Legion Doom-Horn", image: "/items/uniques/undead/dkUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Dk, stats: {str: 100, agi: 50, int: 50}, passive: "Frost Wyrm has a 8% chance to trigger Frostmourne." },

    // Archimonde
    96: { name: "Mana Stone", image: "/items/uniques/undead/archiUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Archi, stats: {str: 50, agi: 50, int: 100}, passive: "Increases passive Skill +1" },
    97: { name: "Mana Stone", image: "/items/uniques/undead/archiUnique.webp", tier: 4, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Archi, stats: {str: 50, agi: 50, int: 100}, passive: "Activating Replenish Mana will restore 7.5% of the mana of allied towers." },

    // Kil'jaeden
    98: { name: "Mark of Death", image: "/items/uniques/undead/kjUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Kj, stats: {str: 100, agi: 50, int: 50}, passive: "Increases passive Skill +1" },
    99: { name: "Mark of Death", image: "/items/uniques/undead/kjUnique.webp", tier: 3, tags: [Heroic, LevelFive, LimitOne], restrictedTo: ItemRestriction.Kj, stats: {str: 100, agi: 50, int: 50}, passive: "When using the Finger of Death skill to kill a target, the skill will reactivate on a nearby target." },

    // Neutral heroes
    100: { name: "Staff of Preservation", image: "/items/uniques/neutral/mediUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Medi, stats: {str: 50, agi: 50, int: 100}, passive: "Increases passive Skill +1" },
    101: { name: "Mark of Fire", image: "/items/uniques/neutral/flUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Fl, stats: { str: 0, agi: 150, int: 0 }, passive: "Increases passive Skill +1" },
    102: { name: "Refined Gunpowder", image: "/items/uniques/neutral/marineUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Marine, stats: { str: 0, agi: 0, int: 0 }, passive: "Increases passive Skill +1" },
    103: { name: "Mark of the Wild", image: "/items/uniques/neutral/illiUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Illi, stats: { str: 0, agi: 0, int: 0 }, passive: "Increases passive Skill +1" },
    104: { name: "Ancestral Staff", image: "/items/uniques/neutral/pandaUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Panda, stats: { str: 0, agi: 0, int: 0 }, passive: "Increases passive Skill +1" },
    105: { name: "Sacrificial Skull", image: "/items/uniques/neutral/pitUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Pit, stats: { str: 0, agi: 0, int: 0 }, passive: "Increases passive Skill +1" },
    106: { name: "Claw of Strength", image: "/items/uniques/neutral/doUnique.webp", tier: 3, tags: [Unique, skillUpgrade, LevelFive, LimitOne], restrictedTo: ItemRestriction.Do, stats: {str: 50, agi: 100, int: 50}, passive: "Increases passive Skill +1"}
    };