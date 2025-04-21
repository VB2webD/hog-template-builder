export enum Race {
    Human = 'Human',
    Orc = 'Orc',
    Elf = 'Elf',
    Undead = 'Undead',
    Neutral = 'Neutral',
    Dragon = 'Dragon'
}

export interface Tower {
    name: string;
    tier: 1 | 2 | 3;
    image: string;
    slots: number;
    race: Race;
    main: "Strength" | "Agility" | "Intelligence" | "";
}

// flattened array for state perisistance, I use this to reduce the volume of the saved states for url hashing

export const towerData:  Record<number, Tower> = {
    //Human
    0: {name: "Windrunner", tier: 1, image: "/towers/human/windRunner.webp", slots: 4, race: Race.Human, main: "Agility"},
    1: {name: "Flying Machine", tier: 1, image: "/towers/human/fm.webp", slots: 4, race: Race.Human, main: "Agility"},
    2: {name: "Sorceress", tier: 1, image: "/towers/human/sorc.png", slots: 4, race: Race.Human, main: "Intelligence"},
    3: {name: "Captain", tier: 1, image: "/towers/human/captain.webp", slots: 4, race: Race.Human, main: "Strength"},
    4: {name: "Priest", tier: 1, image: "/towers/human/priest.webp", slots: 4, race: Race.Human, main: "Intelligence"},
    5: {name: "Jaina", tier: 2, image: "/towers/human/jaina.png", slots: 5, race: Race.Human, main: "Intelligence"},
    6: {name: "Paladin", tier: 2, image: "/towers/human/pala.webp", slots: 5, race: Race.Human, main: "Strength"},
    7: {name: "Gryphon Rider", tier: 2, image: "/towers/human/gryph.webp", slots: 5, race: Race.Human, main: "Intelligence"},
    8: {name: "Dragonhawk Rider", tier: 2, image: "/towers/human/dhr.webp", slots: 5, race: Race.Human, main: "Agility"},
    9: {name: "Archmage", tier: 2, image: "/towers/human/archmage.webp", slots: 5, race: Race.Human, main: "Intelligence"},
    10: {name: "Kael", tier: 3, image: "/towers/human/kael.png", slots: 6, race: Race.Human, main: "Intelligence"},
    11: {name: "Uther", tier: 3, image: "/towers/human/uther.webp", slots: 6, race: Race.Human, main: "Strength"},
    12: {name: "Mountain King", tier: 3, image: "/towers/human/mk.webp", slots: 6, race: Race.Human, main: "Strength"},
    13: {name: "Admiral Proudmoore", tier: 3, image: "/towers/human/ap.webp", slots: 6, race: Race.Human, main: "Agility"},
    // Orc
    14: {name: "Grunt", tier: 1, image: "/towers/orc/grunt.webp", slots: 4, race: Race.Orc, main: "Strength"},
    15: {name: "Tauren", tier: 1, image: "/towers/orc/tauren.webp", slots: 4, race: Race.Orc, main: "Strength"},
    16: {name: "Shaman", tier: 1, image: "/towers/orc/shaman.webp", slots: 4, race: Race.Orc, main: "Intelligence"},
    17: {name: "Troll Headhunter", tier: 1, image: "/towers/orc/thh.webp", slots: 4, race: Race.Orc, main: "Agility"},
    18: {name: "Troll Witch Doctor", tier: 1, image: "/towers/orc/twd.webp", slots: 4, race: Race.Orc, main: "Intelligence"},
    19: {name: "Orc Warlock", tier: 2, image: "/towers/orc/warlock.webp", slots: 5, race: Race.Orc, main: "Intelligence"},
    20: {name: "Shadow Hunter", tier: 2, image: "/towers/orc/sh.webp", slots: 5, race: Race.Orc, main: "Agility"},
    21: {name: "Far Seer", tier: 2, image: "/towers/orc/fs.webp", slots: 5, race: Race.Orc, main: "Intelligence"},
    22: {name: "Tauren Chieftain", tier: 2, image: "/towers/orc/tc.webp", slots: 5, race: Race.Orc, main: "Strength"},
    23: {name: "Raider", tier: 2, image: "/towers/orc/raider.webp", slots: 5, race: Race.Orc, main: "Strength"},
    24: {name: "Blademaster", tier: 2, image: "/towers/orc/blade.webp", slots: 5, race: Race.Orc, main: "Agility"},
    25: {name: "Beastmaster", tier: 2, image: "/towers/orc/beastmaster.webp", slots: 5, race: Race.Orc, main: "Strength"},
    26: {name: "Grom", tier: 3, image: "/towers/orc/grom.webp", slots: 6, race: Race.Orc, main: "Agility"},
    27: {name: "Thrall", tier: 3, image: "/towers/orc/thrall.webp", slots: 6, race: Race.Orc, main: "Intelligence"},
    28: {name: "Gul'dan", tier: 3, image: "/towers/orc/gul.webp", slots: 6, race: Race.Orc, main: "Strength"},
    // Elf
    29: {name: "Druid of Talon", tier: 1, image: "/towers/elf/claw.webp", slots: 4, race: Race.Elf, main: "Agility"},
    30: {name: "Druid of Claw", tier: 1, image: "/towers/elf/talon.webp", slots: 4, race: Race.Elf, main: "Strength"},
    31: {name: "Dryad", tier: 1, image: "/towers/elf/dryad.webp", slots: 4, race: Race.Elf, main: "Intelligence"},
    32: {name: "Avatar of Vengeance", tier: 1, image: "/towers/elf/avaVengeance.webp", slots: 4, race: Race.Elf, main: "Agility"},
    33: {name: "Warden", tier: 2, image: "/towers/elf/warden.webp", slots: 5, race: Race.Elf, main: "Intelligence"},
    34: {name: "Faery Drake", tier: 2, image: "/towers/elf/fd.webp", slots: 5, race: Race.Elf, main: "Intelligence"},
    35: {name: "Huntress", tier: 2, image: "/towers/elf/huntress.webp", slots: 5, race: Race.Elf, main: "Agility"},
    36: {name: "Malfurion", tier: 2, image: "/towers/elf/malf.webp", slots: 5, race: Race.Elf, main: "Intelligence"},
    37: {name: "Keeper of the Grove", tier: 2, image: "/towers/elf/keeper.webp", slots: 5, race: Race.Elf, main: "Intelligence"},
    38: {name: "Maiev", tier: 3, image: "/towers/elf/maiev.webp", slots: 6, race: Race.Elf, main: "Agility"},
    39: {name: "Demon Hunter", tier: 3, image: "/towers/elf/dh.webp", slots: 6, race: Race.Elf, main: "Agility"},
    40: {name: "Priestess of the Moon", tier: 3, image: "/towers/elf/potm.webp", slots: 6, race: Race.Elf, main: "Agility"},
    41: {name: "Ancient of Lore", tier: 3, image: "/towers/elf/aol.webp", slots: 6, race: Race.Elf, main: "Intelligence"},
    // Undead
    42: {name: "Crypt Fiend", tier: 1, image: "/towers/undead/cryptFiend.webp", slots: 4, race: Race.Undead, main: "Agility"},
    43: {name: "Abomination", tier: 1, image: "/towers/undead/abo.webp", slots: 4, race: Race.Undead, main: "Strength"},
    44: {name: "Acolyte", tier: 1, image: "/towers/undead/acolyte.webp", slots: 4, race: Race.Undead, main: "Intelligence"},
    45: {name: "Ghoul", tier: 1, image: "/towers/undead/ghoul.webp", slots: 4, race: Race.Undead, main: "Agility"},
    46: {name: "Banshee", tier: 1, image: "/towers/undead/banshee.webp", slots: 4, race: Race.Undead, main: "Intelligence"},
    47: {name: "Skeleton Mage", tier: 1, image: "/towers/undead/skellyMage.png", slots: 4, race: Race.Undead, main: "Intelligence"},
    48: {name: "Dreadlord", tier: 2, image: "/towers/undead/dread.webp", slots: 5, race: Race.Undead, main: "Strength"},
    49: {name: "Destroyer", tier: 2, image: "/towers/undead/destro.webp", slots: 5, race: Race.Undead, main: "Intelligence"},
    50: {name: "Dark Ranger", tier: 2, image: "/towers/undead/darkRanger.webp", slots: 5, race: Race.Undead, main: "Agility"},
    51: {name: "Necromancer", tier: 2, image: "/towers/undead/necro.webp", slots: 5, race: Race.Undead, main: "Intelligence"},
    52: {name: "Lich", tier: 3, image: "/towers/undead/lich.webp", slots: 6, race: Race.Undead, main: "Intelligence"},
    53: {name: "Crypt Lord", tier: 3, image: "/towers/undead/cl.webp", slots: 6, race: Race.Undead, main: "Agility"},
    54: {name: "Death Knight", tier: 3, image: "/towers/undead/dk.webp", slots: 6, race: Race.Undead, main: "Strength"},
    55: {name: "Archimonde", tier: 3, image: "/towers/undead/archi.webp", slots: 6, race: Race.Undead, main: "Intelligence"},
    56: {name: "Kil'jaeden", tier: 3, image: "/towers/undead/kj.webp", slots: 6, race: Race.Undead, main: "Strength"},
    // Neutral
    57: {name: "Goblin Shredder", tier: 1, image: "/towers/neutral/shredder.webp", slots: 4, race: Race.Neutral, main: "Agility"},
    58: {name: "Naga Siren", tier: 1, image: "/towers/neutral/nagaSiren.webp", slots: 4, race: Race.Neutral, main: "Intelligence"},
    59: {name: "LavaSpawn", tier: 1, image: "/towers/neutral/lavaSpawn.webp", slots: 4, race: Race.Neutral, main: "Strength"},
    60: {name: "Naga Royal Guard", tier: 2, image: "/towers/neutral/nrg.webp", slots: 5, race: Race.Neutral, main: "Strength"},
    61: {name: "Naga Sea Witch", tier: 2, image: "/towers/neutral/nsw.webp", slots: 5, race: Race.Neutral, main: "Intelligence"},
    62: {name: "Tinker", tier: 2, image: "/towers/neutral/tinker.webp", slots: 5, race: Race.Neutral, main: "Intelligence"},
    63: {name: "Alchemist", tier: 2, image: "/towers/neutral/alchemist.webp", slots: 5, race: Race.Neutral, main: "Strength"},
    64: {name: "Medivh", tier: 3, image: "/towers/neutral/medi.webp", slots: 6, race: Race.Neutral, main: "Intelligence"},
    65: {name: "Fire Lord", tier: 3, image: "/towers/neutral/fl.webp", slots: 6, race: Race.Neutral, main: "Agility"},
    66: {name: "Marine", tier: 3, image: "/towers/neutral/marine.webp", slots: 6, race: Race.Neutral, main: "Agility"},
    67: {name: "Illidan", tier: 3, image: "/towers/neutral/illi.webp", slots: 6, race: Race.Neutral, main: "Strength"},
    68: {name: "Pandaren Brewmaster", tier: 3, image: "/towers/neutral/panda.webp", slots: 6, race: Race.Neutral, main: "Strength"},
    69: {name: "Pitlord", tier: 3, image: "/towers/neutral/pit.webp", slots: 6, race: Race.Neutral, main: "Strength"},
    70: {name: "Dragonspawn Overseer", tier: 3, image: "/towers/neutral/do.webp", slots: 6, race: Race.Neutral, main: "Agility"},
    // Dragon towers
    71: {name: "Red Dragon", tier: 3, image: "towers/dragon/dragonRed.webp", slots: 0, race: Race.Dragon, main: ""},
    72: {name: "Blue Dragon", tier: 3, image: "towers/dragon/dragonBlue.webp", slots: 0, race: Race.Dragon, main: ""},
    73: {name: "Green Dragon", tier: 3, image: "towers/dragon/dragonGreen.webp", slots: 0, race: Race.Dragon, main: ""},
    74: {name: "Yellow Dragon", tier: 3, image: "towers/dragon/dragonYellow.webp", slots: 0, race: Race.Dragon, main: ""},
    75: {name: "Black Dragon", tier: 3, image: "towers/dragon/dragonBlack.webp", slots: 0, race: Race.Dragon, main: ""},
};


