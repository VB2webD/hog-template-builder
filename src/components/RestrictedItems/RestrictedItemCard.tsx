import React, { useState } from "react";
import { itemData } from "../../features/Items/itemData";
import {
    addItemOnFirstEmptySlot,
    getItemShadowClass,
    setItemDragData
} from "../../features/Items/itemHelper.ts";
import { useTowerStore } from "../../state/towerStore.ts";

interface RestrictedItemCardProps {
    itemId: number;
}

export const RestrictedItemCard: React.FC<RestrictedItemCardProps> = ({ itemId }) => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const [hover, setHover] = useState(false);
    const item = itemData[itemId];

    if (!item) return null;

    return (
        <div
            className={`
                w-16 h-16 border border-gray-300 bg-white flex items-center justify-center
                ${getItemShadowClass(item.tags)}
            `}
            style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            draggable
            onDragStart={(e) => {
                setItemDragData(e, itemId, -1);
            }}
            onDoubleClick={() => {
                addItemOnFirstEmptySlot(selectedTowerId, itemId);
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover && (
                <div className="absolute left-1/2 bottom-[-1.5rem] transform -translate-x-1/2 px-2 py-1 text-xs bg-black text-white bg-opacity-80 rounded whitespace-nowrap pointer-events-none">
                    {item.name} (Tier {item.tier})
                </div>
            )}
        </div>
    );
};
