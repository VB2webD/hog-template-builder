export enum Race {
    Human = 'Human',
    Orc = 'Orc'
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
        ]
}