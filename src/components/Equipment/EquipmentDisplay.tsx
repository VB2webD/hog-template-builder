// EquipmentDisplay.tsx
import React, { useState } from "react";

import { useTowerStore } from "../../state/towerStore";
import {equipmentData, EquipmentType} from "../../features/Equipment/equipmentData";
import { EquipmentSlotCard } from "./EquipmentSlotCard";
import { EquipmentSelection } from "./EquipmentSelection"; // Will be created next

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

    return (
        <div className="p-4 bg-gray-100 border rounded shadow w-full max-w-sm flex flex-col gap-2">
            {Object.values(EquipmentType)
                .filter((v) => typeof v === "number")
                .map((slotIndex) => {
                    const itemId = equippedGear[slotIndex as number];
                    const item = itemId != null ? equipmentData[itemId] : null;

                    return (
                        <EquipmentSlotCard
                            key={slotIndex}
                            slot={slotIndex as EquipmentType}
                            item={item}
                            onClick={() => handleSlotClick(slotIndex as EquipmentType)}
                        />
                    );
                })}

            {activeSlot !== null && (
                <EquipmentSelection
                    type={activeSlot}
                    onSelect={(itemId) => handleItemSelect(activeSlot, itemId)}
                />
            )}
        </div>
    );
};
