import { create } from 'zustand';
import { TowerEntity } from '../entities/towerEntity.ts';
import { ItemEntity } from '../entities/itemEntity.ts';

type TowerStore = {
    towers: Record<string, TowerEntity>;
    selectedTowerId: string | null;
    setTower: (key: string, tower: TowerEntity | null) => void;
    setSelectedTowerId: (key: string | null) => void;
    addItemToTower: (towerId: string, item: ItemEntity) => void;
};

export const useTowerStore = create<TowerStore>((set) => ({
    towers: {},
    selectedTowerId: null,

    setTower: (key, tower) =>
        set((state: TowerStore) => {
            const updated = { ...state.towers };
            if (tower) {
                updated[key] = tower;
            } else {
                delete updated[key];
            }
            return { towers: updated };
        }),

    setSelectedTowerId: (key) => set({ selectedTowerId: key }),

    addItemToTower: (towerId, item) =>
        set((state: TowerStore) => {
            const tower = state.towers[towerId];
            if (!tower || tower.items.length >= tower.slots) return state;

            const updatedTower: TowerEntity = {
                ...tower,
                items: [...tower.items, item]
            };

            return {
                towers: {
                    ...state.towers,
                    [towerId]: updatedTower
                }
            };
        })
}));
