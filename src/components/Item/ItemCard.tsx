import React, { useState } from "react";
import { useTowerStore } from "../../state/towerStore.ts";
import {addItemOnFirstEmptySlot, getItemShadowClass} from "../../features/Items/itemHelper.ts";
import { flattenedItems } from "../../features/Items/itemData.ts";

interface ItemCardProps {
    id: number;
}

export const ItemCard: React.FC<ItemCardProps> = ({ id }) => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const [hover, setHover] = useState(false);
    const item = flattenedItems[id];

    return (
        <div
            className={`w-16 h-16 cursor-move relative rounded border bg-white ${getItemShadowClass(item.tags)}
            `}
            draggable
            onDoubleClick={() => {
                if (selectedTowerId !== null) {
                    addItemOnFirstEmptySlot(selectedTowerId, id);
                }
            }}
            onDragStart={(e) => e.dataTransfer.setData("item-id", id.toString())}
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
