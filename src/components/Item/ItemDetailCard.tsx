import React from "react";
import {itemData} from "../../features/Items/itemData";
import {ItemTags} from "../../entities/itemEntity";

interface ItemDetailCardProps {
    itemId: number;
}

export const ItemDetailCard: React.FC<ItemDetailCardProps> = ({itemId}) => {
    const item = itemData[itemId];

    if (!item) return null;
    const {name, tier, passive, active, stats, tags} = item;
    console.log(name, tier, passive, active, stats, tags)

    return (
        <div className="text-left text-xs p-2 select-none bg-white border rounded shadow max-w-xs">
            <div className="font-bold text-sm mb-1">{name} (Tier {tier})</div>

            {/* Stats */}
            {stats && (
                <div className="mb-1">
                    {stats.str > 0 && <div>+{stats.str} Strength</div>}
                    {stats.agi > 0 && <div>+{stats.agi} Agility</div>}
                    {stats.int > 0 && <div>+{stats.int} Intelligence</div>}
                </div>
            )}

            {/* Passive */}
            {passive && (
                <div className="italic mb-1">Passive: {passive}</div>
            )}

            {/* Active */}
            {active && (
                <div className="italic mb-1">Active: {active}</div>
            )}

            {/* Tags */}
            {tags?.length ? (
                <div className="flex flex-wrap gap-1">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 bg-gray-200 text-gray-700 rounded text-[10px]"
                        >
                            {ItemTags[tag]}
                        </span>
                    ))}
                </div>
            ) : null}
        </div>
    );
};
