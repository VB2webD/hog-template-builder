import React from "react";
import { EquipmentType, displayEquipmentType } from "../../features/Equipment/equipmentData";
import { EquipmentEntity } from "../../entities/EquipmentEntity.ts";

interface Props {
    slot: EquipmentType;
    item: EquipmentEntity | null;
    onClick: () => void;
}

export const EquipmentSlotCard: React.FC<Props> = ({ slot, item, onClick }) => {
    const imageSrc = item ? item.image : `/equipment/empty-slot.png`;
    const altText = item ? item.name : `Empty ${displayEquipmentType(slot)} slot`;

    return (
        <div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            onClick={onClick}
            title={altText}
        >
            <img
                src={imageSrc}
                alt={altText}
                className="w-12 h-12 object-contain border rounded"
            />
        </div>
    );
};
