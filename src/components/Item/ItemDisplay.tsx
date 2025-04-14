import React, { useState } from "react";
import { itemData } from "../../features/Items/itemData";
import { ItemTags } from "../../entities/itemEntity.ts";
import { ItemCard } from "./ItemCard";

export const ItemDisplay: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<ItemTags>(ItemTags.Quick);

    const filterableTags: ItemTags[] = [
        ItemTags.Quick,
        ItemTags.Slow,
        ItemTags.ArmorReduction,
        ItemTags.Summon,
        ItemTags.Effect,
        ItemTags.Aura,
        ItemTags.Reset,
        ItemTags.Upgraded,
        ItemTags.Potion,
        ItemTags.Resistance,
    ];

    const itemsArray = Object.entries(itemData)
        .map(([id, item]) => ({ id: Number(id), ...item }))
        .filter((item) => {
            if (item.restrictedTo !== null) return false;
            return item.tags?.includes(activeFilter);
        });

    return (
        <div className="p-4 bg-gray-100 border rounded shadow select-none flex flex-col">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                {filterableTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveFilter(tag)}
                        className={`px-3 py-1 rounded-full border text-sm capitalize ${
                            activeFilter === tag
                                ? "bg-blue-600 text-black border-blue-600"
                                : "bg-white text-gray-600 border-gray-300"
                        }`}
                    >
                        {ItemTags[tag]}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-11 gap-x-1 gap-y-1  h-[10rem]">
                {itemsArray.map((item) => (
                    <ItemCard key={item.id} id={item.id} />
                ))}
            </div>
        </div>
    );
};
