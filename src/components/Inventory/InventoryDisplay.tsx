import React from "react";
import { useTowerStore } from "../../state/towerStore";
import { RestrictedItemPanel } from "../RestrictedItemPanel/RestrictedItemPanel.tsx";
import { Inventory } from "./Inventory";


export const InventoryDisplay: React.FC = () => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const towers = useTowerStore(state => state.towers);
    const tower = selectedTowerId ? towers[selectedTowerId] : null;

    if (!tower) return null;

    return (
        <div className="flex gap-4 items-start">
            <Inventory tower={tower} />
            <RestrictedItemPanel towerName={tower.name} towerTier={tower.tier} />
        </div>
    );
};