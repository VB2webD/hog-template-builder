import React from "react";
import { Items } from "../../features/Items/itemData";
import { ItemCard } from "./ItemCard";

export const ItemDisplay: React.FC = () => {
    return (
        <div className="grid grid-cols-3 gap-2 p-4">
            {Items.map((item) => (
                <ItemCard key={item.name} item={item} />
            ))}
        </div>
    );
};
