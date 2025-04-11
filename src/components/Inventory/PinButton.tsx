import React from "react";
import {useTowerStore} from "../../state/towerStore.ts";

interface PinTowerButtonProbs {
    towerId: string;
}

export const PinButton: React.FC<PinTowerButtonProbs> = ({towerId}) => {
    const pinnedTowers = useTowerStore(state => state.pinnedTowers);
    const togglePinnedTower = useTowerStore(state => state.togglePinnedTower);
    const isPinned = pinnedTowers.includes(towerId);

    return (
        <button
            onClick={() => togglePinnedTower(towerId)}
            className={`
        px-2 py-1 border rounded text-sm
        ${isPinned ? "bg-yellow-300 border-yellow-500 text-black" : "bg-white border-gray-300 text-gray-700"}
        hover:shadow-md transition
      `}
            title={isPinned ? "Unpin tower" : "Pin tower"}
        >
            {isPinned ? "📌 Pinned" : "📍 Pin"}
        </button>
    );
};
