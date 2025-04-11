import {create} from 'zustand';
import {TowerEntity} from '../entities/towerEntity';
import {ItemEntity} from '../entities/itemEntity';

type TowerStore = {
    towers: Record<string, TowerEntity>;
    selectedTowerId: string | null;
    setTower: (id: string, tower: TowerEntity | null) => void;
    setSelectedTowerId: (id: string | null) => void;
    updateItemSlot: (towerId: string, item: ItemEntity | null, toIndex: number, fromIndex: number) => void;
};


export const useTowerStore = create<TowerStore>((set) => ({
        towers: {},
        selectedTowerId: null,

        setTower: (gridPosition, tower) => {
            set((state) => {
                const updated = {...state.towers};
                if (tower) {
                    updated[gridPosition] = tower;
                    console.log("[ZUSTAND] setTower updated:", gridPosition);
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

        updateItemSlot: (towerId, item, toIndex, fromIndex) =>
            set((state) => {
                const tower = state.towers[towerId];
                if (!tower) return state;

                const updatedItems = Array.from({length: tower.slots}, (_, i) => tower.items[i] || null);

                updatedItems[toIndex] = item;

                if (fromIndex !== toIndex) {
                    updatedItems[fromIndex] = null;
                }

                return {
                    towers: {
                        ...state.towers,
                        [towerId]: {
                            ...tower,
                            items: updatedItems,
                        },
                    },
                };
            }),


    }))
;
