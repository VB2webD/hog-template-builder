import React, { useState } from "react";
import { towersByRace, Race } from "../../features/Towers/towerData";
import { TowerCard } from "./TowerCard";

export const TowerDisplay: React.FC = () => {
    const [activeRace, setActiveRace] = useState<Race>(Race.Human);

    const races = Object.keys(towersByRace) as Race[];
    const towers = towersByRace[activeRace];

    const tierColors: Record<1 | 2 | 3, string> = {
        1: "bg-green-100",
        2: "bg-purple-100",
        3: "bg-orange-100",
    };

    // Group towers by tier
    const groupedByTier = towers.reduce<Record<1 | 2 | 3, typeof towers>>((acc, tower) => {
        acc[tower.tier] = acc[tower.tier] || [];
        acc[tower.tier].push(tower);
        return acc;
    }, { 1: [], 2: [], 3: [] });

    return (
        <div className="p-4 bg-gray-100 border rounded shadow w-full max-w-5xl">
            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-2">
                {races.map((race) => (
                    <button
                        key={race}
                        onClick={() => setActiveRace(race)}
                        className={`px-4 py-1 text-sm font-medium rounded-full border transition-colors duration-200 whitespace-nowrap ${
                            race === activeRace
                                ? 'bg-blue-600 text-black border-blue-600'
                                : 'bg-white text-gray-500 border-gray-300'
                        }`}
                    >
                        {race}
                    </button>
                ))}
            </div>

            {/* Grid by Tier */}
            <div className="space-y-2">
                {[1, 2, 3].map((tier) => {
                    const tierKey = tier as 1 | 2 | 3;
                    const towers = groupedByTier[tierKey];
                    if (towers.length === 0) return null;
                    return (
                        <div key={tierKey} className={`p-2 rounded ${tierColors[tierKey]}`}>

                            <div className="grid grid-cols-5 gap-2 justify-items-center">
                                {towers.map((tower) => (
                                    <TowerCard
                                        key={`${activeRace}-${tower.name}`}
                                        name={tower.name}
                                        image={tower.image}
                                        slots={tower.slots}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
