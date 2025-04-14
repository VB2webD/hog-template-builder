import React from "react";
import { getItemShadowClass, setItemDragData } from "../../features/Items/itemHelper.ts";
import { itemData } from "../../features/Items/itemData";

interface InventoryCardProps {
    index: number;
    itemId: number | null;
    onRightClick: (index: number) => void;
    onDrop: (index: number, e: React.DragEvent<HTMLDivElement>) => void;
}

export const InventoryCard: React.FC<InventoryCardProps> = ({
                                                                index,
                                                                itemId,
                                                                onRightClick,
                                                                onDrop
                                                            }) => {
    const item = itemId !== null ? itemData[itemId] : null;

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onRightClick(index);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        onDrop(index, e);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const commonProps = {
        onDrop: handleDrop,
        onDragOver: handleDragOver,
        onContextMenu: handleRightClick,
        style: {
            backgroundImage: item ? `url(${item.image})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        },
        className: `
            w-16 h-16 border border-gray-300 bg-white flex items-center justify-center select-none
            ${item ? getItemShadowClass(item.tags) : ""}
        `,
    };

    if (item) {
        return (
            <div
                {...commonProps}
                draggable
                onDragStart={(e) => setItemDragData(e, itemId, index)}
            />
        );
    }

    return (
        <div {...commonProps}>
            <span className="text-xs text-gray-400">Empty</span>
        </div>
    );
};
