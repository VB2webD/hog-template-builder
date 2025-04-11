import React from "react";
import {InventoryCard} from "./InventoryCard";
import {ItemEntity} from "../../entities/itemEntity";
import {TowerEntity} from "../../entities/towerEntity";
import {useTowerStore} from "../../state/towerStore";

interface InventoryProps {
    towerId:string |null;
    tower: TowerEntity | null;
}

export const Inventory: React.FC<InventoryProps> = ({towerId, tower}) => {
    const updateItemSlot = useTowerStore(state => state.updateItemSlot);
    const setTower = useTowerStore(state => state.setTower);

    const slots = tower?.slots ?? 0;
    const items = tower?.items ?? [];
    const normalizedItems: (ItemEntity | null)[] = Array.from(
        {length: 6},
        (_, i) => items[i] || null
    );

    const handleRemove = (index: number) => {
        if (!tower) return;
        const updated = [...items];
        updated[index] = null;

        setTower(tower.name, {
            ...tower,
            items: updated,
        });
    };

    const handleDrop = (index: number, e: React.DragEvent<HTMLDivElement>) => {
        if (!tower || !towerId) return;
        e.preventDefault();

        const itemData = e.dataTransfer.getData("item-entity");
        const fromIndex = parseInt(e.dataTransfer.getData("inventory-index"));
        console.log(itemData)
        if (!itemData) return;

        try {
            const item: ItemEntity = JSON.parse(itemData);
            updateItemSlot(
                towerId,
                item,
                index,
                fromIndex
            );
        } catch (err) {
            console.error("Failed to parse item-entity", err);
        }
    };

    return (
        <div className="inline-block bg-gray-100 border rounded shadow relative pt-14 px-4 pb-4 min-h-[192px] min-w-[144px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                    src={tower?.image || "/placeholder.webp"}
                    alt="Tower preview"
                    className="w-20 h-20 object-contain border bg-white"
                />
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-1 justify-center items-start">
                {[...Array(6)].map((_, index) => {
                    const item = normalizedItems[index];
                    const isDisabled = index >= slots || !tower;

                    return isDisabled ? (
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
                    );
                })}
            </div>
        </div>
    );
};
