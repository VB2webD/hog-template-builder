import { create } from 'zustand';
import { TowerEntity } from '../entities/towerEntity.ts';
import { ItemEntity } from '../entities/itemEntity.ts';

type TowerStore = {
    towers: Record<string, TowerEntity>;
    selectedTowerId: string | null;
    setTower: (key: string, tower: TowerEntity | null) => void;
    setSelectedTowerId: (key: string | null) => void;
    updateItemSlot: (towerId: string, item: ItemEntity, toIndex:number, fromIndex: number) => void;
};

export const useTowerStore = create<TowerStore>((set) => ({
    towers: {},
    selectedTowerId: null,

    setTower: (gridPosition, tower) => {
        set((state: TowerStore) => {
            const updated = { ...state.towers };
            if (tower) {
                updated[gridPosition] = tower;
                console.log("[ZUSTAND] setTower updated:", gridPosition);
                console.log("[ZUSTAND] New tower state:", tower);
            } else {
                delete updated[gridPosition];
                console.log("[ZUSTAND] setTower removed:", gridPosition);
            }
            console.log("[ZUSTAND] Full towers map after update:", updated);
            return { towers: updated };
        });
    },

    setSelectedTowerId: (key) => {
        console.log("[ZUSTAND] setSelectedTowerId:", key);
        set({ selectedTowerId: key });
    },

    updateItemSlot: (towerId:string, item:ItemEntity, toIndex:number, fromIndex:number) =>
        set((state) => {
            const tower = state.towers[towerId];
            if (!tower) return state;

            const updated = Array.from({ length: tower.slots }, (_, i) => tower.items[i] || null);
            updated[toIndex] = item;

            if (fromIndex !== toIndex) {
                updated[fromIndex] = null;
            }

            console.log(`[updateItemSlot] tower: ${towerId}, from: ${fromIndex}, to: ${toIndex}`);
            console.log("[updateItemSlot] updated items:", updated);

            return {
                towers: {
                    ...state.towers,
                    [towerId]: {
                        ...tower,
                        items: updated,
                    },
                },
            };
        }),


}));
