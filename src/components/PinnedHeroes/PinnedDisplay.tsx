import React from "react";
import { Inventory } from "../Inventory/Inventory.tsx";
import { useTowerStore } from "../../state/towerStore.ts";

export const PinnedDisplay: React.FC = () => {
    const pinnedTowers = useTowerStore(state => state.pinnedTowers);
    const towers = useTowerStore(state => state.towers);

    return (
        <div className="grid grid-cols-2 gap-4 justify-center items-start">
            {Array.from({ length: 4 }, (_, index) => {
                const towerId = pinnedTowers[index];
                const placedTower = towerId ? towers[towerId] : null;

                return placedTower ? (
                    <Inventory key={towerId} towerId={towerId} placedTower={placedTower} />
                ) : (
                    <div
                        key={`placeholder-${index}`}
                        className="inline-block bg-gray-100 border rounded shadow relative pt-14 px-4 pb-4 min-h-[192px] min-w-[144px]"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img
                                src="/placeholder.webp"
                                alt="Empty slot"
                                className="w-20 h-20 object-contain border bg-white"
                            />
                        </div>
                        <div className="grid grid-cols-2 grid-rows-3 gap-1 justify-center items-start">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-16 h-16 border border-gray-300 bg-gray-200 opacity-50"
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
