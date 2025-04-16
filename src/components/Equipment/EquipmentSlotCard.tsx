import React from "react";
import {EquipmentType,displayEquipmentType} from "../../features/Equipment/equipmentData";
import {EquipmentEntity} from "../../entities/EquipmentEntity.ts";

interface Props {
    slot: EquipmentType;
    item: EquipmentEntity | null;
    onClick: () => void;
}

export const EquipmentSlotCard: React.FC<Props> = ({ slot, item, onClick }) => {
    return (
        <div
            className="flex items-center justify-between p-2 bg-white border rounded cursor-pointer hover:bg-gray-100"
            onClick={onClick}
        >
            <span className="font-medium">{displayEquipmentType(slot)}</span>
            {item ? (
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-contain border rounded"
                />
            ) : (
                <span className="text-gray-400 text-sm">Empty</span>
            )}
        </div>
    );
};
