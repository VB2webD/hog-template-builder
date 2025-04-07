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
}

export const towersByRace: Record<Race, Tower[]> = {
    [Race.Human]: [
        {name: 'Windrunner', tier: 1, image: '/towers/human/windRunner.webp', slots: 4},
        {name: 'Flying Machine', tier: 1, image: '/towers/human/fm.webp', slots: 4},
        {name: 'Sorceress', tier: 1, image: '/towers/human/sorc.png', slots: 4},
        {name: 'Captain', tier: 1, image: '/towers/human/captain.webp', slots: 4},
        {name: 'Priest', tier: 1, image: '/towers/human/priest.webp', slots: 4},
        {name: 'Jaina', tier: 2, image: '/towers/human/jaina.png', slots: 5},
        {name: 'Paladin', tier: 2, image: '/towers/human/pala.webp', slots: 5},
        {name: 'Gryphon Rider', tier: 2, image: '/towers/human/gryph.webp', slots: 5},
        {name: 'Dragonhawk Rider', tier: 2, image: '/towers/human/dhr.webp', slots: 5},
        {name: 'Archmage', tier: 2, image: '/towers/human/archmage.webp', slots: 5},
        {name: 'Kael', tier: 3, image: '/towers/human/kael.png', slots: 6},
        {name: 'Uther', tier: 3, image: '/towers/human/uther.webp', slots: 6},
        {name: 'Mountain King', tier: 3, image: '/towers/human/mk.webp', slots: 6},
        {name: 'Admiral Proudmoore', tier: 3, image: '/towers/human/ap.webp', slots: 6},
    ],
    [Race.Orc]:
        [
            {name: 'Grunt', tier: 1, image: '/towers/orc/grunt.webp', slots: 4},
            {name: 'Tauren', tier: 1, image: '/towers/orc/tauren.webp', slots: 4},
            {name: 'Shaman', tier: 1, image: '/towers/orc/shaman.webp', slots: 4},
            {name: 'Troll Headhunter', tier: 1, image: '/towers/orc/thh.webp', slots: 4},
            {name: 'Troll Witch Doctor', tier: 1, image: '/towers/orc/twd.webp', slots: 4},
            {name: 'Orc Warlock', tier: 2, image: '/towers/orc/warlock.webp', slots: 5},
            {name: 'Shadow Hunter', tier: 2, image: '/towers/orc/sh.webp', slots: 5},
            {name: 'Far Seer', tier: 2, image: '/towers/orc/fs.webp', slots: 5},
            {name: 'Tauren Chieftain', tier: 2, image: '/towers/orc/tc.webp', slots: 5},
            {name: 'Raider', tier: 2, image: '/towers/orc/raider.webp', slots: 5},
            {name: 'Blademaster', tier: 2, image: '/towers/orc/blade.webp', slots: 5},
            {name: 'Beastmaster', tier: 2, image: '/towers/orc/beastmaster.webp', slots: 5},
            {name: 'Grom', tier: 3, image: '/towers/orc/grom.webp', slots: 6},
            {name: 'Thrall', tier: 3, image: '/towers/orc/thrall.webp', slots: 6},
            {name: 'Gul\'dan', tier: 3, image: '/towers/orc/gul.webp', slots: 6},
        ],
    [Race.Elv]:
        [
            {name: 'Druid of Talon', tier: 1, image: '/towers/elv/claw.webp', slots: 4},
            {name: 'Druid of Claw', tier: 1, image: '/towers/elv/talon.webp', slots: 4},
            {name: 'Dryad', tier: 1, image: '/towers/elv/dryad.webp', slots: 4},
            {name: 'Avatar of Vengeance', tier: 1, image: '/towers/elv/avaVengeance.webp', slots: 4},
            {name: 'Warden', tier: 2, image: '/towers/elv/warden.webp', slots: 5},
            {name: 'Faery Drake', tier: 2, image: '/towers/elv/fd.webp', slots: 5},
            {name: 'Huntress', tier: 2, image: '/towers/elv/huntress.webp', slots: 5},
            {name: 'Malfurion', tier: 2, image: '/towers/elv/malf.webp', slots: 5},
            {name: 'Keeper of the Grove', tier: 2, image: '/towers/elv/keeper.webp', slots: 5},
            {name: 'Maiev', tier: 3, image: '/towers/elv/maiev.webp', slots: 6},
            {name: 'Demon Hunter', tier: 3, image: '/towers/elv/dh.webp', slots: 6},
            {name: 'Priestess of the Moon', tier: 3, image: '/towers/elv/potm.webp', slots: 6},
            {name: 'Ancient of Lore', tier: 3, image: '/towers/elv/aol.webp', slots: 6},
        ],
    [Race.Undead]:
        [
            {name: 'Crypt Fiend', tier: 1, image: '/towers/undead/cryptFiend.webp', slots: 4},
            {name: 'Abomination', tier: 1, image: '/towers/undead/abo.webp', slots: 4},
            {name: 'Acolyte', tier: 1, image: '/towers/undead/acolyte.webp', slots: 4},
            {name: 'Ghoul', tier: 1, image: '/towers/undead/ghoul.webp', slots: 4},
            {name: 'Banshee', tier: 1, image: '/towers/undead/banshee.webp', slots: 4},
            {name: 'Skeleton Mage', tier: 1, image: '/towers/undead/skellyMage.png', slots: 4},
            {name: 'Dreadlord', tier: 2, image: '/towers/undead/dread.webp', slots: 5},
            {name: 'Destroyer', tier: 2, image: '/towers/undead/destro.webp', slots: 5},
            {name: 'Dark Ranger', tier: 2, image: '/towers/undead/darkRanger.webp', slots: 5},
            {name: 'Necromancer', tier: 2, image: '/towers/undead/necro.webp', slots: 5},
            {name: 'Lich', tier: 3, image: '/towers/undead/lich.webp', slots: 6},
            {name: 'Crypt Lord', tier: 3, image: '/towers/undead/cl.webp', slots: 6},
            {name: 'Death Knight', tier: 3, image: '/towers/undead/dk.webp', slots: 6},
            {name: 'Archimonde', tier: 3, image: '/towers/undead/archi.webp', slots: 6},
            {name: 'Kil\'jaeden', tier: 3, image: '/towers/undead/kj.webp', slots: 6},
        ],
    [Race.Neutral]:
        [
            {name: 'Goblin Shredder', tier: 1, image: '/towers/neutral/shredder.webp', slots: 4},
            {name: 'Naga Siren', tier: 1, image: '/towers/neutral/nagaSiren.webp', slots: 4},
            {name: 'LavaSpawn', tier: 1, image: '/towers/neutral/lavaSpawn.webp', slots: 4},
            {name: 'Naga Royal Guard', tier: 2, image: '/towers/neutral/nrg.webp', slots: 5},
            {name: 'Naga Sea Witch', tier: 2, image: '/towers/neutral/nsw.webp', slots: 5},
            {name: 'Tinker', tier: 2, image: '/towers/neutral/tinker.webp', slots: 5},
            {name: 'Alchemist', tier: 2, image: '/towers/neutral/alchemist.webp', slots: 5},
            {name: 'Medivh', tier: 3, image: '/towers/neutral/medi.webp', slots: 6},
            {name: 'Fire Lord', tier: 3, image: '/towers/neutral/fl.webp', slots: 6},
            {name: 'Marine', tier: 3, image: '/towers/neutral/marine.webp', slots: 6},
            {name: 'Illidan', tier: 3, image: '/towers/neutral/illi.webp', slots: 6},
            {name: 'Pandaren Brewmaster', tier: 3, image: '/towers/neutral/panda.webp', slots: 6},
            {name: 'Pitlord', tier: 3, image: '/towers/neutral/pit.webp', slots: 6},
            {name: 'Dragonspawn Overseer', tier: 3, image: '/towers/neutral/do.webp', slots: 6},
        ],
    [Race.Dragon]:
    [
        {name: 'Red Dragon', tier: 3, image:'towers/dragon/dragonRed.webp', slots: 0},
        {name: 'Blue Dragon', tier: 3, image:'towers/dragon/dragonBlue.webp', slots: 0},
        {name: 'Green Dragon', tier: 3, image:'towers/dragon/dragonGreen.webp', slots: 0},
        {name: 'Yellow Dragon', tier: 3, image:'towers/dragon/dragonYellow.webp', slots: 0},
        {name: 'Black Dragon', tier: 3, image:'towers/dragon/dragonBlack.webp', slots: 0},
    ]
}