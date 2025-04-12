export enum Race {
    Human = 'Human',
    Orc = 'Orc',
    Elv = 'Elv',
    Undead = 'Undead',
    Neutral = 'Neutral',
    Dragon = 'Dragon'
}

export interface Tower {
    name: string;
    tier: 1 | 2 | 3;
    image: string;
    slots: number;
    race: Race
}

// flattened array for state perisistance, I use this to reduce the volume of the saved states for url hashing

export const flatTowers:  Record<number, Tower> = {
    //Human
    0: {name: "Windrunner", tier: 1, image: "/towers/human/windRunner.webp", slots: 4, race: Race.Human},
    1: {name: "Flying Machine", tier: 1, image: "/towers/human/fm.webp", slots: 4, race: Race.Human},
    2: {name: "Sorceress", tier: 1, image: "/towers/human/sorc.png", slots: 4, race: Race.Human},
    3: {name: "Captain", tier: 1, image: "/towers/human/captain.webp", slots: 4, race: Race.Human},
    4: {name: "Priest", tier: 1, image: "/towers/human/priest.webp", slots: 4, race: Race.Human},
    5: {name: "Jaina", tier: 2, image: "/towers/human/jaina.png", slots: 5, race: Race.Human},
    6: {name: "Paladin", tier: 2, image: "/towers/human/pala.webp", slots: 5, race: Race.Human},
    7: {name: "Gryphon Rider", tier: 2, image: "/towers/human/gryph.webp", slots: 5, race: Race.Human},
    8: {name: "Dragonhawk Rider", tier: 2, image: "/towers/human/dhr.webp", slots: 5, race: Race.Human},
    9: {name: "Archmage", tier: 2, image: "/towers/human/archmage.webp", slots: 5, race: Race.Human},
    10: {name: "Kael", tier: 3, image: "/towers/human/kael.png", slots: 6, race: Race.Human},
    11: {name: "Uther", tier: 3, image: "/towers/human/uther.webp", slots: 6, race: Race.Human},
    12: {name: "Mountain King", tier: 3, image: "/towers/human/mk.webp", slots: 6, race: Race.Human},
    13: {name: "Admiral Proudmoore", tier: 3, image: "/towers/human/ap.webp", slots: 6, race: Race.Human},
    // Orc
    14: {name: "Grunt", tier: 1, image: "/towers/orc/grunt.webp", slots: 4, race: Race.Orc},
    15: {name: "Tauren", tier: 1, image: "/towers/orc/tauren.webp", slots: 4, race: Race.Orc},
    16: {name: "Shaman", tier: 1, image: "/towers/orc/shaman.webp", slots: 4, race: Race.Orc},
    17: {name: "Troll Headhunter", tier: 1, image: "/towers/orc/thh.webp", slots: 4, race: Race.Orc},
    18: {name: "Troll Witch Doctor", tier: 1, image: "/towers/orc/twd.webp", slots: 4, race: Race.Orc},
    19: {name: "Orc Warlock", tier: 2, image: "/towers/orc/warlock.webp", slots: 5, race: Race.Orc},
    20: {name: "Shadow Hunter", tier: 2, image: "/towers/orc/sh.webp", slots: 5, race: Race.Orc},
    21: {name: "Far Seer", tier: 2, image: "/towers/orc/fs.webp", slots: 5, race: Race.Orc},
    22: {name: "Tauren Chieftain", tier: 2, image: "/towers/orc/tc.webp", slots: 5, race: Race.Orc},
    23: {name: "Raider", tier: 2, image: "/towers/orc/raider.webp", slots: 5, race: Race.Orc},
    24: {name: "Blademaster", tier: 2, image: "/towers/orc/blade.webp", slots: 5, race: Race.Orc},
    25: {name: "Beastmaster", tier: 2, image: "/towers/orc/beastmaster.webp", slots: 5, race: Race.Orc},
    26: {name: "Grom", tier: 3, image: "/towers/orc/grom.webp", slots: 6, race: Race.Orc},
    27: {name: "Thrall", tier: 3, image: "/towers/orc/thrall.webp", slots: 6, race: Race.Orc},
    28: {name: "Gul'dan", tier: 3, image: "/towers/orc/gul.webp", slots: 6, race: Race.Orc},
    // Elv
    29: {name: "Druid of Talon", tier: 1, image: "/towers/elv/claw.webp", slots: 4, race: Race.Elv},
    30: {name: "Druid of Claw", tier: 1, image: "/towers/elv/talon.webp", slots: 4, race: Race.Elv},
    31: {name: "Dryad", tier: 1, image: "/towers/elv/dryad.webp", slots: 4, race: Race.Elv},
    32: {name: "Avatar of Vengeance", tier: 1, image: "/towers/elv/avaVengeance.webp", slots: 4, race: Race.Elv},
    33: {name: "Warden", tier: 2, image: "/towers/elv/warden.webp", slots: 5, race: Race.Elv},
    34: {name: "Faery Drake", tier: 2, image: "/towers/elv/fd.webp", slots: 5, race: Race.Elv},
    35: {name: "Huntress", tier: 2, image: "/towers/elv/huntress.webp", slots: 5, race: Race.Elv},
    36: {name: "Malfurion", tier: 2, image: "/towers/elv/malf.webp", slots: 5, race: Race.Elv},
    37: {name: "Keeper of the Grove", tier: 2, image: "/towers/elv/keeper.webp", slots: 5, race: Race.Elv},
    38: {name: "Maiev", tier: 3, image: "/towers/elv/maiev.webp", slots: 6, race: Race.Elv},
    39: {name: "Demon Hunter", tier: 3, image: "/towers/elv/dh.webp", slots: 6, race: Race.Elv},
    40: {name: "Priestess of the Moon", tier: 3, image: "/towers/elv/potm.webp", slots: 6, race: Race.Elv},
    41: {name: "Ancient of Lore", tier: 3, image: "/towers/elv/aol.webp", slots: 6, race: Race.Elv},
    // Undead
    42: {name: "Crypt Fiend", tier: 1, image: "/towers/undead/cryptFiend.webp", slots: 4, race: Race.Undead},
    43: {name: "Abomination", tier: 1, image: "/towers/undead/abo.webp", slots: 4, race: Race.Undead},
    44: {name: "Acolyte", tier: 1, image: "/towers/undead/acolyte.webp", slots: 4, race: Race.Undead},
    45: {name: "Ghoul", tier: 1, image: "/towers/undead/ghoul.webp", slots: 4, race: Race.Undead},
    46: {name: "Banshee", tier: 1, image: "/towers/undead/banshee.webp", slots: 4, race: Race.Undead},
    47: {name: "Skeleton Mage", tier: 1, image: "/towers/undead/skellyMage.png", slots: 4, race: Race.Undead},
    48: {name: "Dreadlord", tier: 2, image: "/towers/undead/dread.webp", slots: 5, race: Race.Undead},
    49: {name: "Destroyer", tier: 2, image: "/towers/undead/destro.webp", slots: 5, race: Race.Undead},
    50: {name: "Dark Ranger", tier: 2, image: "/towers/undead/darkRanger.webp", slots: 5, race: Race.Undead},
    51: {name: "Necromancer", tier: 2, image: "/towers/undead/necro.webp", slots: 5, race: Race.Undead},
    52: {name: "Lich", tier: 3, image: "/towers/undead/lich.webp", slots: 6, race: Race.Undead},
    53: {name: "Crypt Lord", tier: 3, image: "/towers/undead/cl.webp", slots: 6, race: Race.Undead},
    54: {name: "Death Knight", tier: 3, image: "/towers/undead/dk.webp", slots: 6, race: Race.Undead},
    55: {name: "Archimonde", tier: 3, image: "/towers/undead/archi.webp", slots: 6, race: Race.Undead},
    56: {name: "Kil'jaeden", tier: 3, image: "/towers/undead/kj.webp", slots: 6, race: Race.Undead},
    // Neutral
    57: {name: "Goblin Shredder", tier: 1, image: "/towers/neutral/shredder.webp", slots: 4, race: Race.Neutral},
    58: {name: "Naga Siren", tier: 1, image: "/towers/neutral/nagaSiren.webp", slots: 4, race: Race.Neutral},
    59: {name: "LavaSpawn", tier: 1, image: "/towers/neutral/lavaSpawn.webp", slots: 4, race: Race.Neutral},
    60: {name: "Naga Royal Guard", tier: 2, image: "/towers/neutral/nrg.webp", slots: 5, race: Race.Neutral},
    61: {name: "Naga Sea Witch", tier: 2, image: "/towers/neutral/nsw.webp", slots: 5, race: Race.Neutral},
    62: {name: "Tinker", tier: 2, image: "/towers/neutral/tinker.webp", slots: 5, race: Race.Neutral},
    63: {name: "Alchemist", tier: 2, image: "/towers/neutral/alchemist.webp", slots: 5, race: Race.Neutral},
    64: {name: "Medivh", tier: 3, image: "/towers/neutral/medi.webp", slots: 6, race: Race.Neutral},
    65: {name: "Fire Lord", tier: 3, image: "/towers/neutral/fl.webp", slots: 6, race: Race.Neutral},
    66: {name: "Marine", tier: 3, image: "/towers/neutral/marine.webp", slots: 6, race: Race.Neutral},
    67: {name: "Illidan", tier: 3, image: "/towers/neutral/illi.webp", slots: 6, race: Race.Neutral},
    68: {name: "Pandaren Brewmaster", tier: 3, image: "/towers/neutral/panda.webp", slots: 6, race: Race.Neutral},
    69: {name: "Pitlord", tier: 3, image: "/towers/neutral/pit.webp", slots: 6, race: Race.Neutral},
    70: {name: "Dragonspawn Overseer", tier: 3, image: "/towers/neutral/do.webp", slots: 6, race: Race.Neutral},
    // Dragon towers
    71: {name: "Red Dragon", tier: 3, image: "towers/dragon/dragonRed.webp", slots: 0, race: Race.Dragon},
    72: {name: "Blue Dragon", tier: 3, image: "towers/dragon/dragonBlue.webp", slots: 0, race: Race.Dragon},
    73: {name: "Green Dragon", tier: 3, image: "towers/dragon/dragonGreen.webp", slots: 0, race: Race.Dragon},
    74: {name: "Yellow Dragon", tier: 3, image: "towers/dragon/dragonYellow.webp", slots: 0, race: Race.Dragon},
    75: {name: "Black Dragon", tier: 3, image: "towers/dragon/dragonBlack.webp", slots: 0, race: Race.Dragon},
};


