import React from "react";
import { useTowerStore } from "../../state/towerStore";
import { RestrictedItemPanel } from "../RestrictedItems/RestrictedItemPanel.tsx";
import { Inventory } from "./Inventory";

export const InventoryDisplay: React.FC = () => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const tower = useTowerStore(state =>
        selectedTowerId ? state.towers[selectedTowerId] : null
    );

    return (
        <div className="flex gap-4 items-start">
            <Inventory towerId={selectedTowerId} tower={tower} />
            {tower && (
                <RestrictedItemPanel
                    name={tower.name}
                    tier={tower.tier}
                />
            )}
        </div>
    );
};
