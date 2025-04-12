import { create } from 'zustand';
import { flatTowers } from '../features/Towers/towerData.ts';

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
    updateItemSlot: (towerId: string, itemId: number | null, toIndex: number, fromIndex: number) => void;
};

export const useTowerStore = create<TowerStore>((set) => ({
    title: '',
    setTitle: (title) => {
        console.log("[ZUSTAND] setTitle:", title);
        set({ title });
    },

    towers: {},
    selectedTowerId: null,
    pinnedTowers: [],

    setTower: (gridPosition, tower) => {
        set((state) => {
            const updated = { ...state.towers };
            if (tower) {
                const def = flatTowers[tower.id];
                const slotCount = def?.slots ?? 0;
                updated[gridPosition] = {
                    id: tower.id,
                    itemsIds: Array(slotCount).fill(null),
                };
                console.log("[ZUSTAND] setTower updated:", gridPosition, updated[gridPosition]);
            } else {
                delete updated[gridPosition];
                console.log("[ZUSTAND] setTower removed:", gridPosition);
            }
            return { towers: updated };
        });
    },


    setSelectedTowerId: (id) => {
        console.log("[ZUSTAND] setSelectedTowerId:", id);
        set({ selectedTowerId: id });
    },

    togglePinnedTower: (id) =>
        set((state) => {
            const isPinned = state.pinnedTowers.includes(id);
            const updatedPins = isPinned
                ? state.pinnedTowers.filter(towerId => towerId !== id)
                : [...state.pinnedTowers, id];

            console.log("[ZUSTAND] Toggled pinned tower:", id, "→", updatedPins);
            return { pinnedTowers: updatedPins };
        }),

    updateItemSlot: (towerId, itemId, toIndex, fromIndex) =>
        set((state) => {
            const tower = state.towers[towerId];
            if (!tower) return state;

            const definition = flatTowers[tower.id];
            if (!definition) return state;

            const updatedItemsIds = Array.from(
                { length: definition.slots },
                (_, i) => tower.itemsIds[i] ?? null
            );

            updatedItemsIds[toIndex] = itemId;

            if (fromIndex !== toIndex) {
                updatedItemsIds[fromIndex] = null;
            }
console.log("updated Items:", updatedItemsIds)
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
}));
