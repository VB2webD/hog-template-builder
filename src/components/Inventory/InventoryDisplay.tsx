import React from "react";
import { useTowerStore } from "../../state/towerStore";
import { RestrictedItemPanel } from "../RestrictedItems/RestrictedItemPanel.tsx";
import { Inventory } from "./Inventory";
import { towerData } from "../../features/Towers/towerData.ts";
import {ItemDetailCard} from "../Item/ItemDetailCard.tsx";

export const InventoryDisplay: React.FC = () => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const hoveredItemId = useTowerStore(state => state.hoveredItemId);
    const placedTower = useTowerStore(state =>
        selectedTowerId ? state.towers[selectedTowerId] : null
    );

    const tower = placedTower ? towerData[placedTower.id] : null;

    return (
        <div className="flex gap-4 items-start">
            {tower && selectedTowerId && (
                <Inventory
                    towerId={selectedTowerId}
                    placedTower={placedTower}
                />
            )}

            {tower && selectedTowerId && (
                <RestrictedItemPanel
                    name={tower.name}
                    tier={tower.tier}
                />
            )}
            {hoveredItemId !== null && (
                <div className="top-0 left-full ml-2 z-50">
                    <ItemDetailCard itemId={hoveredItemId} />
                </div>
            )}
        </div>
    );
};
