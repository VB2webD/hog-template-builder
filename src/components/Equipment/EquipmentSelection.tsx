import React from "react";
import { equipmentData, EquipmentType } from "../../features/Equipment/equipmentData";
import { EquipmentItem } from "./EquipmentItem";

interface EquipmentSelectionProps {
    type: EquipmentType;
    onSelect: (itemId: number) => void;
}

export const EquipmentSelection: React.FC<EquipmentSelectionProps> = ({ type, onSelect }) => {
    const itemsByType = Object.entries(equipmentData)
        .filter(([, value]) => value.type === type)
        .map(([id, value]) => ({ id: Number(id), ...value }));

    return (
        <div className="p-4 border rounded shadow bg-white max-w-sm grid grid-cols-4 gap-4">
            {itemsByType.map((item) => (
                <EquipmentItem
                    key={item.id}
                    item={item}
                    onClick={() => onSelect(item.id)}
                />
            ))}
        </div>
    );
};
