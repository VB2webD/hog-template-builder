import React from "react";
import { itemData } from "../../features/Items/itemData";
import { ItemCard } from "./ItemCard";

export const ItemDisplay: React.FC = () => {
    return (
        <div className="grid gap-2 p-5 grid-cols-10 bg-gray-100 border rounded shadow">
            {Object.entries(itemData).map(([id]) => (
                <ItemCard key={id} id={parseInt(id)} />
            ))}
        </div>
    );
};
