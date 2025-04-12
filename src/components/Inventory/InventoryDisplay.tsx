import React from "react";
import { useTowerStore } from "../../state/towerStore";
import { RestrictedItemPanel } from "../RestrictedItems/RestrictedItemPanel.tsx";
import { Inventory } from "./Inventory";
import { flatTowers } from "../../features/Towers/towerData.ts";

export const InventoryDisplay: React.FC = () => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const placedTower = useTowerStore(state =>
        selectedTowerId ? state.towers[selectedTowerId] : null
    );

    const tower = placedTower ? flatTowers[placedTower.id] : null;

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
        </div>
    );
};
