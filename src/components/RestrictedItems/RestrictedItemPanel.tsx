import React, { useMemo } from "react";
import { itemData } from "../../features/Items/itemData";
import { RestrictedItemCard } from "./RestrictedItemCard";

interface PanelProps {
    name: string;
    tier: number;
    main: string;
}

export const RestrictedItemPanel: React.FC<PanelProps> = ({ name, tier, main }) => {
    const items = useMemo(() => {
        return Object.entries(itemData)
            .map(([id, item]) => ({ ...item, id: parseInt(id, 10) }))
            .filter(item => {
                if (tier === 3) return item.restrictedTo === name;
                if (tier === 1) return item.restrictedTo === main;
                return item.restrictedTo === tier;
            });
    }, [name, tier, main]);

    if (!items.length) return null;

    return (
        <div className="grid grid-cols-1 gap-5 p-2 bg-gray">
            {items.map(item => (
                <RestrictedItemCard key={item.id} itemId={item.id} />
            ))}
        </div>
    );
};
