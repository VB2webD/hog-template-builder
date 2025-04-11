import React from "react";
import { ItemEntity } from "../../entities/itemEntity";
import { getItemShadowClass, setItemDragData } from "../../features/Items/itemHelper.ts";

interface InventoryCardProps {
    index: number;
    item: ItemEntity | null;
    onRightClick: (index: number) => void;
    onDrop: (index: number, e: React.DragEvent<HTMLDivElement>) => void;
}

export const InventoryCard: React.FC<InventoryCardProps> = ({
                                                                index,
                                                                item,
                                                                onRightClick,
                                                                onDrop
                                                            }) => {

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onRightClick(index);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        onDrop(index, e);
        console.log("[InventoryCard] Dropped item at slot", index);
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
            w-16 h-16 border border-gray-300 bg-white flex items-center justify-center
            ${item ? getItemShadowClass(item) : ""}
        `,
    };

    return item ? (
        <div
            {...commonProps}
            draggable
            onDragStart={(e) => setItemDragData(e, item, index)}
        />
    ) : (
        <div {...commonProps}>
            <span className="text-xs text-gray-400">Empty</span>
        </div>
    );
};
