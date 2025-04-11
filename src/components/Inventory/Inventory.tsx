import React from "react";
import {InventoryCard} from "./InventoryCard";
import {ItemEntity} from "../../entities/itemEntity";
import {useTowerStore} from "../../state/towerStore";
import {handleItemDrop} from "../../features/Items/itemHelper.ts";
import {PinButton} from "./PinButton.tsx";

interface InventoryProps {
    towerId: string | null;
}

export const Inventory: React.FC<InventoryProps> = ({towerId}) => {
    const tower = useTowerStore(state =>
        towerId ? state.towers[towerId] : null
    );
    const updateItemSlot = useTowerStore(state => state.updateItemSlot);

    const slots = tower?.slots ?? 0;
    const items = tower?.items ?? [];
    const normalizedItems: (ItemEntity | null)[] = Array.from({length: 6}, (_, i) => items[i] || null);

    const handleRemove = (index: number) => {
        if (!towerId) return;
        updateItemSlot(towerId, null, index, index)
    };

    const handleDrop = (index: number, e: React.DragEvent<HTMLDivElement>) => {
        if (!towerId) return;
        handleItemDrop(index, e, towerId)
    };

    return (
        <div className="inline-block bg-gray-100 border rounded shadow relative pt-14 px-4 pb-4 min-h-[192px] min-w-[144px]">
            {towerId && <PinButton towerId={towerId} />}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                    src={tower?.image || "/placeholder.webp"}
                    alt="Tower preview"
                    className="w-20 h-20 object-contain border bg-white"
                />
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-1 justify-center items-start">
                {Array.from({length: 6}, (_, index) => {
                    const item = normalizedItems[index];
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
