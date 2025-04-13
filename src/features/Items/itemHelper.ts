import React from "react";
import {ItemTags} from "../../entities/itemEntity";
import {useTowerStore} from "../../state/towerStore.ts";
import {flatTowers} from "../Towers/towerData.ts";


const tagShadows: Partial<Record<ItemTags, string>> = {
    [ItemTags.Unique]: "shadow-[0_0_6px_5px_rgba(255,215,0,0.8)]",
    [ItemTags.Heroic]: "shadow-[0_0_6px_5px_rgba(139,0,0,0.8)]",
    [ItemTags.Upgraded]:"shadow-[0_0_6px_5px_rgba(139,0,0,1)]"
};

export function getItemShadowClass(tags: ItemTags[]): string {
    for (const tag of tags) {
        const shadow = tagShadows[tag];
        if (shadow) {
            return shadow;
        }
    }
    return "";
}

export function setItemDragData(
    e: React.DragEvent<HTMLDivElement>,
    itemId: number | null,
    index: number
) {
    if (!itemId) return;
    e.dataTransfer.setData("item-id", itemId.toString());
    e.dataTransfer.setData("inventory-index", index.toString());
}

export function handleItemDrop(
    index: number,
    e: React.DragEvent<HTMLDivElement>,
    towerId: string
) {
    e.preventDefault();

    const itemIdRaw = e.dataTransfer.getData("item-id");
    const fromIndex = parseInt(e.dataTransfer.getData("inventory-index"), 10);
    console.warn("[handleItemDrop] No item-id in dataTransfer");
    if (!itemIdRaw) return;

    const itemId = parseInt(itemIdRaw, 10);
    if (isNaN(itemId)) return;

    const updateItemSlot = useTowerStore.getState().updateItemSlot;
    updateItemSlot(towerId, itemId, index, isNaN(fromIndex) ? index : fromIndex);
    console.log(`[handleItemDrop] itemId=${itemId}, towerId=${towerId}, toIndex=${index}, fromIndex=${fromIndex}`);
}

export function addItemOnFirstEmptySlot(towerId: string | null, item: number) {
    if (!towerId) return;

    const store = useTowerStore.getState();
    const tower = store.towers[towerId];
    if (!tower) return;

    const def = flatTowers[tower.id];
    if (!def) return;

    const items = tower.itemsIds ?? [];
    const normalizedItems = Array.from({length: def.slots}, (_, i) => items[i] ?? null);
    const emptyIndex = normalizedItems.findIndex(slot => slot === null);

    if (emptyIndex === -1) return;

    store.updateItemSlot(towerId, item, emptyIndex, emptyIndex);
}
