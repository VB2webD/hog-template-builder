import React from "react";
import {useTowerStore} from "../../state/towerStore.ts";
import {Pin, PinOff} from "lucide-react";
import toast from "react-hot-toast";

interface PinTowerButtonProps {
    towerId: string;
}

export const PinButton: React.FC<PinTowerButtonProps> = ({towerId}) => {
    const pinnedTowers = useTowerStore(state => state.pinnedTowers);
    const togglePinnedTower = useTowerStore(state => state.togglePinnedTower);
    const isPinned = pinnedTowers.includes(towerId);

    return (
        <button
            onClick={() => {
                togglePinnedTower(towerId);
                toast.success(isPinned ? "Unpinned tower" : "Pinned tower");
            }}
            className="absolute top-1 right-1 hover:bg-yellow-500 active:scale-95 transition duration-350 ease-in-out"
            style={{padding: "0"}}
        >
            {isPinned ? (
                <PinOff className="w-7 h-7 text-red-500 rounded block"/>
            ) : (
                <Pin className="w-7 h-7 text-yellow-600 rounded"/>
            )}
        </button>
    );
};
