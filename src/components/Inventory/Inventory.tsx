import React from "react";
import { InventoryCard } from "./InventoryCard";
import { useTowerStore } from "../../state/towerStore";
import { flatTowers } from "../../features/Towers/towerData";
import { handleItemDrop } from "../../features/Items/itemHelper";
import { PinButton } from "../Buttons/PinButton.tsx";
import { PlacedTower } from "../../state/towerStore";

interface InventoryProps {
    towerId: string;
    placedTower: PlacedTower | null;
}

export const Inventory: React.FC<InventoryProps> = ({ towerId, placedTower }) => {
    const updateItemSlot = useTowerStore(state => state.updateItemSlot);

    const definition = placedTower ? flatTowers[placedTower.id] : null;
    const slots = definition?.slots ?? 0;
    const items = placedTower?.itemsIds ?? [];

    const normalizedItems = Array.from({ length: 6 }, (_, i) => items[i] ?? null);

    const handleRemove = (index: number) => {
        if (!placedTower) return;
        updateItemSlot(towerId, null, index, index);
    };

    const handleDrop = (index: number, e: React.DragEvent<HTMLDivElement>) => {
        if (!placedTower) return;
        handleItemDrop(index, e, towerId);
    };

    return (
        <div className="inline-block bg-gray-100 border rounded shadow relative pt-14 px-1 pb-1 min-h-[192px] min-w-[144px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                    src={definition?.image || "/placeholder.webp"}
                    alt="Tower preview"
                    className="w-17 h-17 object-contain border bg-white"
                />
            </div>
            <PinButton towerId={towerId} />
            <div className="grid grid-cols-2 grid-rows-3 gap-1 justify-center items-start">
                {Array.from({ length: 6 }, (_, index) => {
                    const itemId = normalizedItems[index];
                    const isDisabled = index >= slots;

                    return isDisabled ? (
                        <div
                            key={index}
                            className="w-16 h-16 border border-gray-300 bg-gray-200 opacity-50"
                        />
                    ) : (
                        <InventoryCard
                            key={index}
                            index={index}
                            itemId={itemId}
                            onRightClick={handleRemove}
                            onDrop={handleDrop}
                        />
                    );
                })}
            </div>
        </div>
    );
};
