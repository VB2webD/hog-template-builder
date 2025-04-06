import React from "react";
import { Items } from "../../features/Items/itemData";
import { ItemCard } from "./ItemCard";

export const ItemDisplay: React.FC = () => {
    return (
        <div className="grid gap-2 p-4 bg-gray-100 border rounded shadow inline-block">
            {Items.map((item) => (
                <ItemCard key={item.name} item={item} />
            ))}
        </div>
    );
};
