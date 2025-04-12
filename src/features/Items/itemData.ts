import {ItemEntity} from "../../entities/itemEntity.ts";

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

export const flattenedItems: Record<number, ItemEntity> = {
    // Slow Auras
    0: {name: "Wand of the Wind", image: "/items/slow/slowT1.png", tier: 1, restrictedTo: null},
    1: {name: "Scepter of the Sea", image: "/items/slow/slowT2.png", tier: 2, restrictedTo: null},
    2: {name: "Staff of Negation", image: "/items/slow/slowT3.webp", tier: 3, restrictedTo: null},

    // -Armor Effects
    3: {name: "Orb of Darkness", image: "/items/-armor/orbT1.webp", tier: 1, restrictedTo: null},
    4: {name: "Orb of Corruption", image: "/items/-armor/orbT2.webp", tier: 2, restrictedTo: null},
    5: {name: "Wand of Shadowsight", image: "/items/-armor/armorAuraT2.png", tier: 2, restrictedTo: null},
    6: {name: "Phoenix Egg", image: "/items/-armor/armorAuraT3.webp", tier: 3, restrictedTo: null},

    // summon auras
    7: {name: "Staff of Reanimation", image: "/items/summonAuras/summonAuraT2.png", tier: 2, restrictedTo: null},
    8: {name: "Scroll of the Unholy Legion", image: "/items/summonAuras/scrollOfUnholyLegion.webp", tier: 3, restrictedTo: null},

    // attack summon
    9: {name: "Vodoo Doll", image: "/items/atkSummon/atkSummonT2.webp", tier: 2, restrictedTo: null},
    10: {name: "Hydra Scales", image: "/items/atkSummon/atkSummonT3.webp", tier: 3, restrictedTo: null},

    // summon duration
    11: {name: "Diamond of Summoning", image: "/items/summonDuration/summonDurationT2.png", tier: 2, restrictedTo: null},
    12: {name: "Skullshield", image: "/items/summonDuration/summonDurationT3.webp", tier: 3, restrictedTo: null},

    // reset
    13: {name: "Shamanic Totem", image: "/items/reset/resetT2.webp", tier: 2, restrictedTo: null},
    14: {name: "Arcane Scroll", image: "/items/reset/resetT3.webp", tier: 3, restrictedTo: null},

    // spelldmg
    15: {name: "Essence of Azune", image: "/items/spelldmg/spelldmgT2.webp", tier: 2, restrictedTo: null},
    16: {name: "Staff of Sanctuary", image: "/items/spelldmg/spelldmgT3.webp", tier: 3, restrictedTo: null},
    // stun
    17: {name: "Wand of Lightning", image: "/items/stun/stunT2.webp", tier: 2, restrictedTo: null},
    18: {name: "Searing Blade", image: "/items/stun/stunT3.webp", tier: 3, restrictedTo: null},
    // general
    19: {name: "Gold Coins", image: "/items/goldCoin.webp", tier: 2, restrictedTo: null},
    20: {name: "Mindstaff", image: "/items/mindStaff.webp", tier: 2, restrictedTo: null},
    21: {name: "Magic Sentry", image: "/items/invisDetection.webp", tier: 2, restrictedTo: null},
    22: {name: "Shaman Claws", image: "/items/shamanClaws.png", tier: 3, restrictedTo: null},
    23: {name: "Bloodfeather Heart", image: "/items/bloodfeatherHeart.webp", tier: 3, restrictedTo: null},
    24: {name: "Staff of Silence", image: "/items/staffOfSilence.webp", tier: 3, restrictedTo: null},
    25: {name: "Searing Bow", image: "/items/fieryBow.webp", tier: 3, restrictedTo: null},
    26: {name: "Storm Hammers", image: "/items/stormHammer.webp", tier: 3, restrictedTo: null},
    27: {name: "Arcanite Shield", image: "/items/stunResistT3.webp", tier: 3, restrictedTo: null},
    28: {name: "Chitinous Blade", image: "/items/chitBlade.png", tier: 3, restrictedTo: null},
    29: {name: "Firehand Gauntlets", image: "/items/agiT2.webp", tier: 2, restrictedTo: null},
    30: {name: "Helm of Battlethirst", image: "/items/agiT3.webp", tier: 3, restrictedTo: null},
    31: {name: "Serathil", image: "/items/axeT3.webp", tier: 3, restrictedTo: null},
    32: {name: "Shield of Honor", image: "/items/burnT3.webp", tier: 3, restrictedTo: null},

    // Potions
    33: {name: "xx", image: "/items/potions/rgbPot.webp", tier: 1, restrictedTo: null},
    34: {name: "xx", image: "/items/potions/rrbPot.webp", tier: 1, restrictedTo: null},
    35: {name: "xx", image: "/items/potions/rrgPot.webp", tier: 1, restrictedTo: null},
    36: {name: "xx", image: "/items/potions/rrrPot.webp", tier: 1, restrictedTo: null},
    37: {name: "xx", image: "/items/potions/ggrPot.webp", tier: 1, restrictedTo: null},
    38: {name: "xx", image: "/items/potions/ggbPot.webp", tier: 1, restrictedTo: null},
    39: {name: "xx", image: "/items/potions/gggPot.webp", tier: 1, restrictedTo: null},
    40: {name: "xx", image: "/items/potions/bbrPot.webp", tier: 1, restrictedTo: null},
    41: {name: "xx", image: "/items/potions/bbgPot.webp", tier: 1, restrictedTo: null},
    42: {name: "xx", image: "/items/potions/bbbPot.webp", tier: 1, restrictedTo: null},
    // Restricted

    // Orb ancients
    43: { name: "Ancient of Fire", image: "/items/orbs/orbRed.webp", tier: 1, restrictedTo: ItemRestriction.Tier1 },
    44: { name: "Ancient of Venom", image: "/items/orbs/orbGreen.webp", tier: 1, restrictedTo: ItemRestriction.Tier1 },
    45: { name: "Ancient of Frost", image: "/items/orbs/orbBlue.webp", tier: 1, restrictedTo: ItemRestriction.Tier1 },
    46: { name: "Ank of Reincarnation", image: "/items/ank.webp", tier: 3, restrictedTo: ItemRestriction.Tier2 },

    // Kael
    47: { name: "unique", image: "/items/uniques/human/kaelUnique.webp", tier: 3, restrictedTo: ItemRestriction.Kael },
    48: { name: "heroic", image: "/items/uniques/human/kaelUnique.webp", tier: 4, restrictedTo: ItemRestriction.Kael },

    // Uther
    49: { name: "unique", image: "/items/uniques/human/utherUnique.webp", tier: 3, restrictedTo: ItemRestriction.Uther },
    50: { name: "heroic", image: "/items/uniques/human/utherUnique.webp", tier: 4, restrictedTo: ItemRestriction.Uther },

    // Mountain King
    51: { name: "unique", image: "/items/uniques/human/mkUnique.webp", tier: 3, restrictedTo: ItemRestriction.Mk },
    52: { name: "heroic", image: "/items/uniques/human/mkUnique.webp", tier: 4, restrictedTo: ItemRestriction.Mk },

    // Admiral Proudmoore
    53: { name: "unique", image: "/items/uniques/human/apUnique.webp", tier: 3, restrictedTo: ItemRestriction.Ap },
    54: { name: "heroic", image: "/items/uniques/human/apUnique.webp", tier: 4, restrictedTo: ItemRestriction.Ap },

    // Grom
    55: { name: "unique", image: "/items/uniques/orc/gromUnique.webp", tier: 3, restrictedTo: ItemRestriction.Grom },
    56: { name: "heroic", image: "/items/uniquesorc/gromUnique.webp", tier: 4, restrictedTo: ItemRestriction.Grom },

    // Gul'dan
    57: { name: "unique", image: "/items/uniques/orc/gulUnique.webp", tier: 3, restrictedTo: ItemRestriction.Gul },
    58: { name: "heroic", image: "/items/uniques/orc/gulUnique.webp", tier: 4, restrictedTo: ItemRestriction.Gul },

    // Thrall
    59: { name: "unique", image: "/items/uniques/orc/thrallUnique.webp", tier: 3, restrictedTo: ItemRestriction.Thrall },
    60: { name: "heroic", image: "/items/uniques/orc/thrallUnique.webp", tier: 4, restrictedTo: ItemRestriction.Thrall },

    // Maiev
    61: { name: "unique", image: "/items/uniques/elv/maievUnique.webp", tier: 3, restrictedTo: ItemRestriction.Maiev },
    62: { name: "heroic", image: "/items/uniques/elv/maievUnique.webp", tier: 4, restrictedTo: ItemRestriction.Maiev },

    // Demon Hunter
    63: { name: "unique", image: "/items/uniques/elv/dhUnique.webp", tier: 3, restrictedTo: ItemRestriction.Dh },
    64: { name: "heroic", image: "/items/uniques/elv/dhUnique.webp", tier: 4, restrictedTo: ItemRestriction.Dh },

    // Priestess of the Moon
    65: { name: "unique", image: "/items/uniques/elv/potmUnique.webp", tier: 3, restrictedTo: ItemRestriction.Potm },
    66: { name: "heroic", image: "/items/uniques/elv/potmUnique.webp", tier: 4, restrictedTo: ItemRestriction.Potm },

    // Ancient of Lore
    67: { name: "unique", image: "/items/uniques/elv/aolUnique.webp", tier: 3, restrictedTo: ItemRestriction.Aol },
    68: { name: "heroic", image: "/items/uniques/elv/aolUnique.webp", tier: 4, restrictedTo: ItemRestriction.Aol },

    // Lich
    69: { name: "unique", image: "/items/uniques/undead/lichUnique.webp", tier: 3, restrictedTo: ItemRestriction.Lich },
    70: { name: "heroic", image: "/items/uniques/undead/lichUnique.webp", tier: 4, restrictedTo: ItemRestriction.Lich },

    // Crypt Lord
    71: { name: "unique", image: "/items/uniques/undead/clUnique.webp", tier: 3, restrictedTo: ItemRestriction.Cl },
    72: { name: "heroic", image: "/items/uniques/undead/clUnique.webp", tier: 4, restrictedTo: ItemRestriction.Cl },

    // Death Knight
    73: { name: "unique", image: "/items/uniques/undead/dkUnique.webp", tier: 3, restrictedTo: ItemRestriction.Dk },
    74: { name: "heroic", image: "/items/uniques/undead/dkUnique.webp", tier: 4, restrictedTo: ItemRestriction.Dk },

    // Archimonde
    75: { name: "unique", image: "/items/uniques/undead/archiUnique.webp", tier: 3, restrictedTo: ItemRestriction.Archi },
    76: { name: "heroic", image: "/items/uniques/undead/archiUnique.webp", tier: 4, restrictedTo: ItemRestriction.Archi },

    // Kil'jaeden
    77: { name: "unique", image: "/items/uniques/undead/kjUnique.webp", tier: 3, restrictedTo: ItemRestriction.Kj },
    78: { name: "heroic", image: "/items/uniques/undead/kjUnique.webp", tier: 3, restrictedTo: ItemRestriction.Kj },

    // Neutral heroes
    79: { name: "unique", image: "/items/uniques/neutral/mediUnique.webp", tier: 3, restrictedTo: ItemRestriction.Medi },
    80: { name: "unique", image: "/items/uniques/neutral/flUnique.webp", tier: 3, restrictedTo: ItemRestriction.Fl },
    81: { name: "unique", image: "/items/uniques/neutral/marineUnique.webp", tier: 3, restrictedTo: ItemRestriction.Marine },
    82: { name: "unique", image: "/items/uniques/neutral/illiUnique.webp", tier: 3, restrictedTo: ItemRestriction.Illi },
    83: { name: "unique", image: "/items/uniques/neutral/pandaUnique.webp", tier: 3, restrictedTo: ItemRestriction.Panda },
    84: { name: "unique", image: "/items/uniques/neutral/pitUnique.webp", tier: 3, restrictedTo: ItemRestriction.Pit },
    85: { name: "unique", image: "/items/uniques/neutral/doUnique.webp", tier: 3, restrictedTo: ItemRestriction.Do }
};