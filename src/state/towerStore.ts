import {create} from 'zustand';
import {towerData} from '../features/Towers/towerData.ts';

export interface PlacedTower {
    id: number; // reference to flatTowers
    itemsIds: (number | null)[];
}

type TowerStore = {
    title: string;
    setTitle: (title: string) => void;

    towers: Record<string, PlacedTower>;
    selectedTowerId: string | null;
    pinnedTowers: string[];

    setTower: (id: string, tower: PlacedTower | null) => void;
    setSelectedTowerId: (id: string | null) => void;
    togglePinnedTower: (id: string) => void;

    hoveredItemId: number | null;
    setHoveredItemId: (id: number | null) => void;

    equippedGear: number[]; // [armorId, weaponId, ...]
    setEquippedGear: (slotIndex: number, itemId: number) => void;

    updateItemSlot: (
        towerId: string,
        itemId: number | null,
        toIndex: number,
        fromIndex: number
    ) => void;

    // 👇 Added for URL persistence
    getPersistedState: () => {
        title: string;
        towers: Record<string, PlacedTower>;
        pinnedTowers: string[];
        selectedTowerId: string | null;
        equippedGear: number[]
    };
    loadPersistedState: (persisted: Partial<Pick<TowerStore, "title" | "towers" | "pinnedTowers" | "selectedTowerId" | "equippedGear">>) => void;

    resetStore: () => void;
};

export const useTowerStore = create<TowerStore>((set, get) => ({
    title: '',
    setTitle: (title) => {
        console.log("[ZUSTAND] setTitle:", title);
        set({title});
    },

    towers: {},
    selectedTowerId: null,
    pinnedTowers: [],
    equippedGear: [],

    setTower: (gridPosition, tower) => {
        set((state) => {
            const updated = {...state.towers};
            if (tower) {
                const def = towerData[tower.id];
                const slotCount = def?.slots ?? 0;
                updated[gridPosition] = {
                    id: tower.id,
                    itemsIds: tower.itemsIds ?? Array(slotCount).fill(null),
                };
                console.log("[ZUSTAND] setTower updated:", gridPosition, updated[gridPosition]);
            } else {
                delete updated[gridPosition];
                console.log("[ZUSTAND] setTower removed:", gridPosition);
            }
            return {towers: updated};
        });
    },


    setSelectedTowerId: (id) => {
        console.log("[ZUSTAND] setSelectedTowerId:", id);
        set({selectedTowerId: id});
    },

    togglePinnedTower: (id) =>
        set((state) => {
            const isPinned = state.pinnedTowers.includes(id);
            const updatedPins = isPinned
                ? state.pinnedTowers.filter(towerId => towerId !== id)
                : [...state.pinnedTowers, id];

            console.log("[ZUSTAND] Toggled pinned tower:", id, "→", updatedPins);
            return {pinnedTowers: updatedPins};
        }),

    hoveredItemId: null,
    setHoveredItemId: (id) => set({hoveredItemId: id}),

    updateItemSlot: (towerId, itemId, toIndex, fromIndex) =>
        set((state) => {
            const tower = state.towers[towerId];
            if (!tower) return state;

            const definition = towerData[tower.id];
            if (!definition) return state;

            const updatedItemsIds = Array.from(
                {length: definition.slots},
                (_, i) => tower.itemsIds[i] ?? null
            );

            updatedItemsIds[toIndex] = itemId;

            if (fromIndex !== toIndex) {
                updatedItemsIds[fromIndex] = null;
            }

            return {
                towers: {
                    ...state.towers,
                    [towerId]: {
                        ...tower,
                        itemsIds: updatedItemsIds,
                    },
                },
            };
        }),

    setEquippedGear: (slotIndex, itemId) =>
        set((state) => {
            const updated = [...state.equippedGear];
            updated[slotIndex] = itemId;
            return { equippedGear: updated };
        }),


    getPersistedState: () => {
        const {title, towers, pinnedTowers, selectedTowerId, equippedGear} = get();
        return {title, towers, pinnedTowers, selectedTowerId, equippedGear};
    },

    loadPersistedState: (persisted: Partial<TowerStore>) => {
        set({
            title: persisted.title ?? '',
            towers: persisted.towers ?? {},
            pinnedTowers: persisted.pinnedTowers ?? [],
            selectedTowerId: persisted.selectedTowerId ?? null,
            equippedGear: persisted.equippedGear ?? []
        });
    },

    resetStore:() => {
        set({
            title: '',
            towers: {},
            pinnedTowers: [],
            selectedTowerId: null,
            equippedGear: []
        });
        // clear URL
        const url = new URL(window.location.href);
        url.searchParams.delete("state");
        window.history.replaceState({}, document.title, url.pathname);

    }
}));
