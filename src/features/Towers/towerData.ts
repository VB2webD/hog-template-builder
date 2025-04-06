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
        {name: 'Sorceress', tier: 1, image: '/towers/human/sorc.png', slots: 4},
        {name: 'Jaina', tier: 2, image: '/towers/human/jaina.png', slots: 5},
        {name: 'Kael', tier: 3, image: '/towers/human/kael.png', slots: 6},
    ],
    [Race.Orc]:
        [
            {name: 'Sorceress', tier: 1, image: '/towers/human/sorc.png', slots: 4},
        ],
    [Race.Elv]:
        [
            {name: 'Sorceress', tier: 1, image: '/towers/human/sorc.png', slots: 4},
        ],
    [Race.Undead]:
        [
            {name: 'Sorceress', tier: 1, image: '/towers/human/sorc.png', slots: 4},
        ],
    [Race.Neutral]:
        [
            {name: 'Sorceress', tier: 1, image: '/towers/human/sorc.png', slots: 4},
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