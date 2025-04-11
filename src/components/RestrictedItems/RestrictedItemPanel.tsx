import React, {useMemo} from "react";
import {restrictedItems} from "../../features/Items/restrictedItemData";
import {RestrictedItemCard} from "./RestrictedItemCard";

interface PanelProbs{
    name:string;
    tier: number;
}
export const RestrictedItemPanel: React.FC<PanelProbs> = ({name, tier}) => {



    const items = useMemo(() => {
        if (tier === 3) {
            return restrictedItems.filter(item => item.restrictedTo === name);
        }
        return restrictedItems.filter(item => item.restrictedTo === tier);
    }, [name, tier]);

    if (!items.length) return null;

    return (
        <div className="grid grid-cols-1 gap-2 p-2 bg-gray border border-gray-300">
            {items.map(item => (
                <RestrictedItemCard key={item.name} item={item}/>
            ))}
        </div>
    );
};
