import React from "react";
import { towersByRace } from "../../features/Towers/towerData";
import { TowerCard } from "./TowerCard";

export const TowerDisplay: React.FC = () => {
    return (
        <div className="p-15 bg-gray-100 border rounded shadow space-y-6 overflow-y-auto max-h-[80vh]">
            {Object.entries(towersByRace).map(([raceKey, towers]) => (
                <div key={raceKey}>
                    <p className="text-sm font-semibold mb-2">{raceKey}</p>
                    <div className="grid grid-cols-5 gap-1">
                        {towers.map((tower) => (
                            <TowerCard
                                key={`${raceKey}-${tower.name}`}
                                name={tower.name}
                                image={tower.image}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
