import React from "react";
import { itemData } from "../../features/Items/itemData";
import { ItemTags } from "../../entities/itemEntity";

interface ItemDetailCardProps {
    itemId: number;
}

export const ItemDetailCard: React.FC<ItemDetailCardProps> = ({ itemId }) => {
    const item = itemData[itemId];
    if (!item) return null;

    const { name, tier, passive, active, stats, tags } = item;

    const tierColorMap: Record<number, string> = {
        1: "text-green-600",
        2: "text-blue-500",
        3: "text-yellow-700",
        4: "text-red-600",
    };

    return (
        <div className="text-left text-xs p-2 select-none bg-white border rounded shadow max-w-xs">
            <div className={`font-bold text-xl mb-2 ${tierColorMap[tier] || "text-black"}`}>
                {name}
            </div>

            {/* Stats */}
            {stats && (
                <div className="mb-2 space-y-0.5">
                    {stats.str > 0 && (
                        <div>
                            <span className="text-red-600 font-semibold">Str:</span>{" "}
                            <span>+{stats.str}</span>
                        </div>
                    )}
                    {stats.agi > 0 && (
                        <div>
                            <span className="text-green-600 font-semibold">Agi:</span>{" "}
                            <span>+{stats.agi}</span>
                        </div>
                    )}
                    {stats.int > 0 && (
                        <div>
                            <span className="text-blue-600 font-semibold">Int:</span>{" "}
                            <span>+{stats.int}</span>
                        </div>
                    )}
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
                <div className="flex flex-wrap gap-1 mt-2">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 bg-gray-200 text-gray-700 rounded"
                        >
                            {ItemTags[tag]}
                        </span>
                    ))}
                </div>
            ) : null}
        </div>
    );
};
