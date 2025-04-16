// EquipmentItem.tsx
import React from "react";
import {EquipmentEntity} from "../../entities/EquipmentEntity.ts";


interface EquipmentItemProps {
    item: EquipmentEntity;
    onClick: () => void;
}

export const EquipmentItem: React.FC<EquipmentItemProps> = ({ item, onClick }) => {
    return (
        <div
            className="flex flex-col items-center gap-1 p-2 border rounded hover:bg-gray-100 cursor-pointer"
            onClick={onClick}
        >
            <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-contain border rounded"
            />
            <span className="text-xs text-center">{item.name}</span>
        </div>
    );
};
