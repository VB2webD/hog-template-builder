import React, { useState } from "react";
import { ItemEntity } from "../../entities/itemEntity";

interface RestrictedItemCardProps {
    item: ItemEntity;
}

export const RestrictedItemCard: React.FC<RestrictedItemCardProps> = ({ item }) => {
    const [hover, setHover] = useState(false);

    const isUnique = item.name.toLowerCase().includes("unique");
    const isHeroic = item.name.toLowerCase().includes("heroic");

    const shadowClass = isUnique
        ? "shadow-[0_0_6px_3px_rgba(255,215,0,0.8)]"
        : isHeroic
            ? "shadow-[0_0_6px_3px_rgba(139,0,0,0.8)]"
            : "";

    return (
        <div
            className={`relative w-16 h-16 border border-gray-300 bg-white cursor-move ${shadowClass}`}
            style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            draggable
            onDragStart={(e) => {
                e.dataTransfer.setData("item-entity", JSON.stringify(item));
                e.dataTransfer.setData("inventory-index", "-1");
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
