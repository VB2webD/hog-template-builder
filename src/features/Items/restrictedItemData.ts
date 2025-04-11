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

export const restrictedItems: ItemEntity[] = [
    {
        name: "Ancient of Fire",
        image: "/items/orbs/orbRed.webp",
        tier: 1,
        restrictedTo: ItemRestriction.Tier1
    }, {
        name: "Ancient of Venom",
        image: "/items/orbs/orbGreen.webp",
        tier: 1,
        restrictedTo: ItemRestriction.Tier1
    }, {
        name: "Ancient of Frost",
        image: "/items/orbs/orbBlue.webp",
        tier: 1,
        restrictedTo: ItemRestriction.Tier1
    }, {
        name: "Ank of Reincarnation",
        image: "/items/ank.webp",
        tier: 3,
        restrictedTo: ItemRestriction.Tier2
    },
// Uniques and heroics
    { name: "xx", image: "/items/uniques/human/kaelUnique.webp", tier: 3, restrictedTo: ItemRestriction.Kael },
    { name: "xxy", image: "/items/uniques/human/kaelUnique.webp", tier: 4, restrictedTo: ItemRestriction.Kael },

    { name: "xx", image: "/items/uniques/human/utherUnique.webp", tier: 3, restrictedTo: ItemRestriction.Uther },
    { name: "xxy", image: "/items/uniques/human/utherUnique.webp", tier: 4, restrictedTo: ItemRestriction.Uther },

    { name: "xx", image: "/items/uniques/human/mkUnique.webp", tier: 3, restrictedTo: ItemRestriction.Mk },
    { name: "xx", image: "/items/uniques/human/mkUnique.webp", tier: 4, restrictedTo: ItemRestriction.Mk },

    { name: "xx", image: "/items/uniques/human/apUnique.webp", tier: 3, restrictedTo: ItemRestriction.Ap },
    { name: "xxy", image: "/items/uniques/human/apUnique.webp", tier: 4, restrictedTo: ItemRestriction.Ap },

    { name: "xx", image: "/items/uniques/orc/gromUnique.webp", tier: 3, restrictedTo: ItemRestriction.Grom },
    { name: "xxy", image: "/items/uniquesorc/gromUnique.webp", tier: 4, restrictedTo: ItemRestriction.Grom },

    { name: "xx", image: "/items/uniques/orc/gulUnique.webp", tier: 3, restrictedTo: ItemRestriction.Gul },
    { name: "xxy", image: "/items/uniques/orc/gulUnique.webp", tier: 4, restrictedTo: ItemRestriction.Gul },

    { name: "xx", image: "/items/uniques/orc/thrallUnique.webp", tier: 3, restrictedTo: ItemRestriction.Thrall },
    { name: "xxy", image: "/items/uniques/orc/thrallUnique.webp", tier: 4, restrictedTo: ItemRestriction.Thrall },

    { name: "xx", image: "/items/uniques/elv/maievUnique.webp", tier: 3, restrictedTo: ItemRestriction.Maiev },
    { name: "xxy", image: "/items/uniques/elv/maievUnique.webp", tier: 4, restrictedTo: ItemRestriction.Maiev },

    { name: "xx", image: "/items/uniques/elv/dhUnique.webp", tier: 3, restrictedTo: ItemRestriction.Dh },
    { name: "xxy", image: "/items/uniques/elv/dhUnique.webp", tier: 4, restrictedTo: ItemRestriction.Dh },

    { name: "xx", image: "/items/uniques/elv/potmUnique.webp", tier: 3, restrictedTo: ItemRestriction.Potm },
    { name: "xxy", image: "/items/uniques/elv/potmUnique.webp", tier: 4, restrictedTo: ItemRestriction.Potm },

    { name: "xx", image: "/items/uniques/elv/aolUnique.webp", tier: 3, restrictedTo: ItemRestriction.Aol },
    { name: "xxy", image: "/items/uniques/elv/aolUnique.webp", tier: 4, restrictedTo: ItemRestriction.Aol },

    { name: "xx", image: "/items/uniques/undead/lichUnique.webp", tier: 3, restrictedTo: ItemRestriction.Lich },
    { name: "xxy", image: "/items/uniques/undead/lichUnique.webp", tier: 4, restrictedTo: ItemRestriction.Lich },

    { name: "xx", image: "/items/uniques/undead/clUnique.webp", tier: 3, restrictedTo: ItemRestriction.Cl },
    { name: "xxy", image: "/items/uniques/undead/clUnique.webp", tier: 4, restrictedTo: ItemRestriction.Cl },

    { name: "xx", image: "/items/uniques/undead/dkUnique.webp", tier: 3, restrictedTo: ItemRestriction.Dk },
    { name: "xxy", image: "/items/uniques/undead/dkUnique.webp", tier: 4, restrictedTo: ItemRestriction.Dk },

    { name: "xx", image: "/items/uniques/undead/archiUnique.webp", tier: 3, restrictedTo: ItemRestriction.Archi },
    { name: "xxy", image: "/items/uniques/undead/archiUnique.webp", tier: 4, restrictedTo: ItemRestriction.Archi },

    { name: "xx", image: "/items/uniques/undead/kjUnique.webp", tier: 3, restrictedTo: ItemRestriction.Kj },
    { name: "xxy", image: "/items/uniques/undead/kjUnique.webp", tier: 3, restrictedTo: ItemRestriction.Kj },

    { name: "xx", image: "/items/uniques/neutral/mediUnique.webp", tier: 3, restrictedTo: ItemRestriction.Medi },
    { name: "xxy", image: "/items/uniques/neutral/mediUnique.webp", tier: 4, restrictedTo: ItemRestriction.Medi },

    { name: "xx", image: "/items/uniques/neutral/flUnique.webp", tier: 3, restrictedTo: ItemRestriction.Fl },
    { name: "xxy", image: "/items/uniques/neutral/flUnique.webp", tier: 4, restrictedTo: ItemRestriction.Fl },

    { name: "xx", image: "/items/uniques/neutral/marineUnique.webp", tier: 3, restrictedTo: ItemRestriction.Marine },
    { name: "xxy", image: "/items/uniques/neutral/marineUnique.webp", tier: 4, restrictedTo: ItemRestriction.Marine },

    { name: "xx", image: "/items/uniques/neutral/illiUnique.webp", tier: 3, restrictedTo: ItemRestriction.Illi },
    { name: "xxy", image: "/items/uniques/neutral/illiUnique.webp", tier: 4, restrictedTo: ItemRestriction.Illi },

    { name: "xx", image: "/items/uniques/neutral/pandaUnique.webp", tier: 3, restrictedTo: ItemRestriction.Panda },
    { name: "xxy", image: "/items/uniques/neutral/pandaUnique.webp", tier: 4, restrictedTo: ItemRestriction.Panda },

    { name: "xx", image: "/items/uniques/neutral/pitUnique.webp", tier: 3, restrictedTo: ItemRestriction.Pit },
    { name: "xxy", image: "/items/uniques/neutral/pitUnique.webp", tier: 4, restrictedTo: ItemRestriction.Pit },

    { name: "xx", image: "/items/uniques/neutral/doUnique.webp", tier: 3, restrictedTo: ItemRestriction.Do },
    { name: "xxy", image: "/items/uniques/neutral/doUnique.webp", tier: 4, restrictedTo: ItemRestriction.Do },
];