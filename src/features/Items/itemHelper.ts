import {ItemEntity} from "../../entities/itemEntity";
import React from "react";
import {useTowerStore} from "../../state/towerStore.ts";


export function getItemShadowClass(item: ItemEntity): string {
    const name = item.name.toLowerCase();
    if (name.includes("unique")) {
        return "shadow-[0_0_6px_3px_rgba(255,215,0,0.8)]";
    }
    if (name.includes("heroic")) {
        return "shadow-[0_0_6px_3px_rgba(139,0,0,0.8)]";
    }
    return "";
}

export function setItemDragData(
    e: React.DragEvent<HTMLDivElement>,
    item: ItemEntity,
    index: number
) {
    e.dataTransfer.setData("item-entity", JSON.stringify(item));
    e.dataTransfer.setData("inventory-index", index.toString());
}

export function handleItemDrop(
    index: number,
    e: React.DragEvent<HTMLDivElement>,
    towerId: string
) {
    e.preventDefault();

    const itemData = e.dataTransfer.getData("item-entity");
    const fromIndex = parseInt(e.dataTransfer.getData("inventory-index"));

    if (!itemData) return;


    try {
        const item: ItemEntity = JSON.parse(itemData);
        const updateItemSlot = useTowerStore.getState().updateItemSlot
        updateItemSlot(towerId, item, index, isNaN(fromIndex) ? index : fromIndex);
    } catch (err) {
        console.error("Failed to parse item-entity", err);
    }
}

