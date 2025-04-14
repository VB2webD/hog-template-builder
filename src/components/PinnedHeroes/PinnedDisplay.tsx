import React from "react";
import { Inventory } from "../Inventory/Inventory.tsx";
import { useTowerStore } from "../../state/towerStore.ts";

export const PinnedDisplay: React.FC = () => {
    const pinnedTowers = useTowerStore(state => state.pinnedTowers);
    const towers = useTowerStore(state => state.towers);

    return (
        <div className="flex flex-wrap justifiy-center gap-10 items-start">
            {Array.from({ length: 6 }, (_, index) => {
                const towerId = pinnedTowers[index];
                const placedTower = towerId ? towers[towerId] : null;

                return placedTower ? (
                    <Inventory key={towerId} towerId={towerId} placedTower={placedTower} />
                ) : null;
            })}
        </div>
    );
};
