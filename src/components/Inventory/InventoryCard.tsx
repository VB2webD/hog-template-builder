// src/components/Inventory/InventoryCard.tsx

import React from "react";
import { ItemEntity } from "../../entities/itemEntity";

interface InventoryCardProps {
    index: number;
    item: ItemEntity | null;
    onRightClick: (index:number) => void
    onDrop: (index:number, e: React.DragEvent<HTMLDivElement>) => void
}

export const InventoryCard: React.FC<InventoryCardProps> = ({ index, item, onRightClick, onDrop }) => {

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onRightClick(index);
    };

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        if (!item) return;
        e.dataTransfer.setData("item-entity", JSON.stringify(item));
        e.dataTransfer.setData("inventory-index", index.toString());
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        onDrop(index, e);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div
            className="w-16 h-16 border border-gray-300 bg-white flex items-center justify-center"
            draggable={!!item}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onContextMenu={handleRightClick}
            style={{
                backgroundImage: item ? `url(${item.image})` : undefined,
                backgroundSize: "cover",
            }}
        >
            {!item && (
                <span className="text-xs text-gray-400">Empty</span>
            )}
        </div>
    );
};
