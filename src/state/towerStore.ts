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
    };

    loadPersistedState: (persisted: Partial<Pick<TowerStore, "title" | "towers" | "pinnedTowers">>) => void;
};

export const useTowerStore = create<TowerStore>((set, get) => ({
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

    getPersistedState: () => {
        const { title, towers, pinnedTowers } = get();
        return { title, towers, pinnedTowers };
    },

    loadPersistedState: (persisted: Partial<TowerStore>) => {
        set({
            title: persisted.title ?? '',
            towers: persisted.towers ?? {},
            pinnedTowers: persisted.pinnedTowers ?? [],
        });
    }
}));
