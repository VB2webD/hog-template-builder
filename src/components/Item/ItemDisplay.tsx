import React from "react";
import { Items } from "../../features/Items/itemData";
import { ItemCard } from "./ItemCard";

export const ItemDisplay: React.FC = () => {
    return (
        <div className="grid gap-2 p-5 grid-cols-10 overflow-y-auto bg-gray-100 border rounded shadow">
            {Items.map((item) => (
                <ItemCard key={item.name} item={item} />
            ))}
        </div>
    );
};
