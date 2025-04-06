import React from "react";
import { ItemEntity } from "../../entities/itemEntity";
import {useTowerStore} from "../../state/towerStore.ts";

interface ItemCardProps {
    item: ItemEntity;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {

    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const towers = useTowerStore(state => state.towers);
    const setTower = useTowerStore(state => state.setTower);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("item-entity", JSON.stringify(item));
    };

    const handleDoubleClick = () => {
        if (!selectedTowerId) return;

        const tower = towers[selectedTowerId];
        if (!tower) return;

        const currentItems = tower.items ?? [];

        // Normalize to exactly 6 items (fill missing slots with null)
        const normalizedItems: (ItemEntity | null)[] = Array.from({ length: 6 }, (_, idx) => currentItems[idx] ?? null);

        // Find the first empty slot
        const emptyIndex = normalizedItems.findIndex(slot => slot === null);
        if (emptyIndex === -1) return; // All slots are full

        // Insert the item
        normalizedItems[emptyIndex] = item;

        setTower(selectedTowerId, {
            ...tower,
            items: normalizedItems,
        });
    };

    const handleMouseOver = () => {

    }


    return (
        <div
            className="border p-2 rounded bg-white cursor-move"
            draggable
            onDoubleClick={handleDoubleClick}
            onDragStart={handleDragStart}
            onMouseOver={handleMouseOver}
        >
            <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
        </div>
    );
};
