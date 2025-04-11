import React, { useState } from "react";
import { ItemEntity } from "../../entities/itemEntity";
import { useTowerStore } from "../../state/towerStore.ts";
import {addItemOnFirstEmptySlot} from "../../features/Items/itemHelper.ts";

interface ItemCardProps {
    item: ItemEntity;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const [hover, setHover] = useState(false);

    return (
        <div
            className="w-16 h-16 cursor-move relative rounded border bg-white"
            draggable
            onDoubleClick={() => {addItemOnFirstEmptySlot(selectedTowerId,item)}
            }
            onDragStart={(e)=> e.dataTransfer.setData("item-entity", JSON.stringify(item))}
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
