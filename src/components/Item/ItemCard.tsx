import React, { useState } from "react";
import { ItemEntity } from "../../entities/itemEntity";
import { useTowerStore } from "../../state/towerStore.ts";

interface ItemCardProps {
    item: ItemEntity;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const towers = useTowerStore(state => state.towers);
    const setTower = useTowerStore(state => state.setTower);
    const [hover, setHover] = useState(false);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("item-entity", JSON.stringify(item));
    };

    const handleDoubleClick = () => {
        if (!selectedTowerId) return;

        const tower = towers[selectedTowerId];
        if (!tower) return;

        const normalizedItems: (ItemEntity | null)[] = Array.from({ length: 6 }, (_, i) => tower.items[i] ?? null);
        const emptyIndex = normalizedItems.findIndex(slot => slot === null);
        if (emptyIndex === -1) return;

        normalizedItems[emptyIndex] = item;

        setTower(selectedTowerId, {
            ...tower,
            items: normalizedItems
        });
    };

    return (
        <div
            className="w-16 h-16 cursor-move relative rounded border bg-white"
            draggable
            onDoubleClick={handleDoubleClick}
            onDragStart={handleDragStart}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {hover && (
                <div className="absolute top-full left-full mt-1 ml-1 transform -translate-x-full whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg z-10">
                    <div className="font-bold">{item.name}</div>
                    <div className="text-[10px]">Tier: {item.tier}</div>
                </div>
            )}
        </div>
    );
};
