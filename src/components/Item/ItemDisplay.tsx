import React, { useState } from "react";
import { itemData } from "../../features/Items/itemData";
import { ItemTags } from "../../entities/itemEntity.ts";
import { ItemCard } from "./ItemCard";

export const ItemDisplay: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<ItemTags | null>(null);

    const filterableTags: ItemTags[] = [
        ItemTags.Slow,
        ItemTags.ArmorReduction,
        ItemTags.Summon,
        ItemTags.Orb,
        ItemTags.Aura,
        ItemTags.Reset,
        ItemTags.Upgraded,
        ItemTags.Potion,
        ItemTags.Silence,
    ];

    const itemsArray = Object.entries(itemData)
        .map(([id, item]) => ({ id: Number(id), ...item }))
        .filter((item) => {
            if (item.restrictedTo !== null) return false;
            if (!activeFilter) return true;
            return item.tags?.includes(activeFilter);
        });

    return (
        <div className="p-4 bg-gray-100 border rounded shadow w-full w-5xl h-[27rem] flex flex-col">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
                <button
                    onClick={() => setActiveFilter(null)}
                    className={`px-3 py-1 rounded-full border text-sm ${
                        activeFilter === null
                            ? "bg-blue-600 text-black border-blue-600"
                            : "bg-white text-gray-600 border-gray-300"
                    }`}
                >
                    All
                </button>
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

            {/* Scrollable Grid Area */}
            <div className="grid grid-cols-5 gap-2 justify-items-center overflow-y-auto pr-1 flex-1">
                {itemsArray.map((item) => (
                    <ItemCard key={item.id} id={item.id} />
                ))}
            </div>
        </div>
    );
};
