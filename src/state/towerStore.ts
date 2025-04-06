// src/state/towerStore.ts
import { create } from 'zustand';
import { TowerEntity } from '../entities/towerEntity.ts';

type TowerStore = {
    towers: Record<string, TowerEntity>;
    selectedTowerId: string | null;
    setTower: (key: string, tower: TowerEntity | null) => void;
    setSelectedTowerId: (key: string | null) => void;
};

export const useTowerStore = create<TowerStore>((set) => ({
    towers: {},
    selectedTowerId: null,

    setTower: (key, tower) =>
        set((state) => {
            const updated = { ...state.towers };
            if (tower) {
                updated[key] = tower;
            } else {
                delete updated[key];
            }
            return { towers: updated };
        }),

    setSelectedTowerId: (key) => set({ selectedTowerId: key }),
}));
