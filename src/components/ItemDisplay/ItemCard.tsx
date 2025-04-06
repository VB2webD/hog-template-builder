import React from "react";
import { ItemEntity } from "../../entities/itemEntity";

interface ItemCardProps {
    item: ItemEntity;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("item-entity", JSON.stringify(item));
    };

    return (
        <div
            className="border p-2 rounded bg-white cursor-move"
            draggable
            onDragStart={handleDragStart}
        >
            <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
            <div className="text-center text-sm">{item.name}</div>
        </div>
    );
};
