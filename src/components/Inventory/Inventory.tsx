// Inventory.tsx
import React from "react";
import { InventoryCard } from "./InventoryCard";
import { ItemEntity } from "../../entities/itemEntity";
import { useTowerStore } from "../../state/towerStore";
import { TowerEntity } from "../../entities/towerEntity";

interface InventoryProps {
    tower: TowerEntity;
}

export const Inventory: React.FC<InventoryProps> = ({ tower }) => {
    const setTower = useTowerStore(state => state.setTower);

    const slots = tower.slots ?? 0;
    const normalizedItems: (ItemEntity | null)[] = Array.from({ length: 6 }, (_, i) => tower.items[i] || null);

    const handleRemove = (index: number) => {
        const updated = [...tower.items];
        updated[index] = null;
        setTower(tower.name, {
            ...tower,
            items: updated,
        });
    };

    const handleDrop = (index: number, e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const itemData = e.dataTransfer.getData("item-entity");
        const fromIndex = parseInt(e.dataTransfer.getData("inventory-index"));

        if (!itemData) return;

        try {
            const item: ItemEntity = JSON.parse(itemData);
            const updated = Array.from({ length: slots }, (_, i) => tower.items[i] || null);
            updated[index] = item;
            if (!isNaN(fromIndex) && fromIndex !== index) {
                updated[fromIndex] = null;
            }

            setTower(tower.name, {
                ...tower,
                items: updated,
            });
        } catch (err) {
            console.error("Failed to parse item-entity", err);
        }
    };

    return (
        <div className="inline-block bg-gray-100 border rounded shadow relative pt-14 px-4 pb-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                    src={tower.image || "/placeholder.webp"}
                    alt="Tower preview"
                    className="w-20 h-20 object-contain border bg-white"
                />
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-1 justify-center items-start">
                {normalizedItems.map((item, index) =>
                    index >= slots ? (
                        <div
                            key={index}
                            className="w-16 h-16 border border-gray-300 bg-gray-200 opacity-50"
                        />
                    ) : (
                        <InventoryCard
                            key={index}
                            index={index}
                            item={item}
                            onRightClick={handleRemove}
                            onDrop={handleDrop}
                        />
                    )
                )}
            </div>
        </div>
    );
};
