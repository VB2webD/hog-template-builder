import React, { useState } from "react";
import { useTowerStore } from "../../state/towerStore";
import { equipmentData, EquipmentType } from "../../features/Equipment/equipmentData";
import { EquipmentSlotCard } from "./EquipmentSlotCard";
import { EquipmentSelection } from "./EquipmentSelection";
import {equipmentSlotLayout} from "../Layout/equipmentSlotLayout.ts";


export const EquipmentDisplay: React.FC = () => {
    const equippedGear = useTowerStore(state => state.equippedGear);
    const [activeSlot, setActiveSlot] = useState<EquipmentType | null>(null);

    const handleSlotClick = (slot: EquipmentType) => {
        setActiveSlot(prev => (prev === slot ? null : slot));
    };

    const handleItemSelect = (slotIndex: number, itemId: number) => {
        useTowerStore.getState().setEquippedGear(slotIndex, itemId);
        setActiveSlot(null);
    };

    const getItem = (type: EquipmentType) => {
        const id = equippedGear[type];
        return id != null ? equipmentData[id] : null;
    };

    return (
        <div className="p-4 bg-gray-100 border rounded  w-full max-w-2xl">
            <div className="flex justify-between gap-4">
                {equipmentSlotLayout.map((column, columnIndex) => (
                    <div key={columnIndex} className="flex flex-col justify-center gap-2 flex-1">
                        {column.map((slotType) => (
                            <EquipmentSlotCard
                                key={slotType}
                                slot={slotType}
                                item={getItem(slotType)}
                                onClick={() => handleSlotClick(slotType)}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {activeSlot !== null && (
                <div className="mt-4">
                    <EquipmentSelection
                        type={activeSlot}
                        onSelect={(itemId) => handleItemSelect(activeSlot, itemId)}
                    />
                </div>
            )}
        </div>
    );
};
