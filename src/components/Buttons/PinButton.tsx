import React from "react";
import { useTowerStore } from "../../state/towerStore.ts";
import { Pin, PinOff } from "lucide-react";

interface PinTowerButtonProps {
    towerId: string;
}

export const PinButton: React.FC<PinTowerButtonProps> = ({ towerId }) => {
    const pinnedTowers = useTowerStore(state => state.pinnedTowers);
    const togglePinnedTower = useTowerStore(state => state.togglePinnedTower);
    const isPinned = pinnedTowers.includes(towerId);

    return (
        <button
            onClick={() => togglePinnedTower(towerId)}
            className="absolute top-1 right-1 hover:bg-yellow-500 active:scale-95 transition duration-350 ease-in-out"
        >
            {isPinned ? (
                <PinOff className="w-7 h-7 text-red-500 rounded" />
            ) : (
                <Pin className="w-7 h-7 text-yellow-500 rounded" />
            )}
        </button>
    );
};
