import React from "react";
import {useTowerStore} from "../../state/towerStore";
import {InventoryCard} from "./InventoryCard";
import {ItemEntity} from "../../entities/itemEntity.ts";

export const Inventory: React.FC = () => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const towers = useTowerStore(state => state.towers);
    const setTower = useTowerStore(state => state.setTower)

    const tower = selectedTowerId ? towers[selectedTowerId] : null;
    const items = tower?.items ?? [];

    const normalizedItems = Array.from({length: 6}, (_, i) => items[i] || null);

    const handleRemove = (index: number) => {
        if (!tower || selectedTowerId === null) return;
        const updated = [...tower.items];
        updated[index] = null;
        setTower(selectedTowerId, {
            ...tower,
            items: updated,
        });
    };

    const handleDrop = (index: number, e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!tower || selectedTowerId === null) return;

        const itemData = e.dataTransfer.getData("item-entity");
        const fromIndex = parseInt(e.dataTransfer.getData("inventory-index"));

        if (!itemData) return;

        try {
            const item: ItemEntity = JSON.parse(itemData);
            const updated = Array.from({length: 6}, (_, i) => tower.items[i] || null);

            updated[index] = item;

            if (!isNaN(fromIndex) && fromIndex !== index) {
                updated[fromIndex] = null;
            }

            
            setTower(selectedTowerId, {
                ...tower,
                items: updated
            });
        } catch (err) {
            console.error("Failed to parse item-entity", err);
        }
    };


    return (
        <div className="relative p-4 pt-12 w-64 bg-gray-100 border rounded shadow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                    src={tower?.image || "/icons/placeholder.png"}
                    alt="Tower preview"
                    className="w-20 h-20 object-contain border bg-white rounded-full"
                />
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-1 items-center">
                {normalizedItems.map((item, index) => (
                    <InventoryCard
                        key={index}
                        index={index}
                        item={item}
                        onRightClick={handleRemove}
                        onDrop={handleDrop}
                    />
                ))}
            </div>
        </div>
    );
};