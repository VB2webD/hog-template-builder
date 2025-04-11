import React, { useState } from "react";
import { ItemEntity } from "../../entities/itemEntity";
import {getItemShadowClass, setItemDragData} from "../../features/Items/itemHelper.ts";

interface RestrictedItemCardProps {
    item: ItemEntity;
}

export const RestrictedItemCard: React.FC<RestrictedItemCardProps> = ({ item }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className={`
                w-16 h-16 border border-gray-300 bg-white flex items-center justify-center
                ${item ? getItemShadowClass(item) : ""}
            `}
            style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            draggable
            onDragStart={(e) => {
                setItemDragData(e, item, -1);
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
