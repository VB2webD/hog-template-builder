import React, {useState} from "react";
import {flatTowers, Race, Tower} from "../../features/Towers/towerData";
import {TowerCard} from "./TowerCard";

export const TowerDisplay: React.FC = () => {
    const [activeRace, setActiveRace] = useState<Race>(Race.Human);

    const tierColors: Record<1 | 2 | 3, string> = {
        1: "bg-green-100",
        2: "bg-purple-100",
        3: "bg-orange-100",
    };

    // Convert Record<number, Tower> to Array<{ id: number; tower: Tower }>
    const towersArray = Object.entries(flatTowers)
        .map(([id, tower]) => ({id: Number(id), ...tower}))
        .filter(tower => tower.race === activeRace);
    console.log(towersArray)
    // Group towers by tier
    const groupedByTier = towersArray.reduce<Record<1 | 2 | 3, Array<{ id: number } & Tower>>>(
        (acc, tower) => {
            const tierKey = tower.tier as 1 | 2 | 3;
            acc[tierKey].push(tower);
            return acc;
        },
        { 1: [], 2: [], 3: [] }
    );


    return (
        <div className="p-4 bg-gray-100 border rounded shadow max-w-2xl">
            {/* Race Tabs */}
            <div className="flex justify-center gap-2 mb-2">
                {Object.values(Race).map((race) => (
                    <button
                        key={race}
                        onClick={() => setActiveRace(race)}
                        className={`px-4 py-1 text-sm font-medium rounded-full border transition-colors duration-200 whitespace-nowrap ${
                            race === activeRace
                                ? "bg-blue-600 text-black border-blue-600"
                                : "bg-white text-gray-500 border-gray-300"
                        }`}
                    >
                        {race}
                    </button>
                ))}
            </div>

            {/* Tiered Grid */}
            {([1, 2, 3] as const).map((tier) => {
                const towers = groupedByTier[tier];
                if (towers.length === 0) return null;

                return (
                    <div key={tier} className={`p-2 rounded ${tierColors[tier]}`}>
                        <div className="grid grid-cols-5 gap-2 justify-items-center">
                            {towers.map((tower) => (
                                <TowerCard
                                    key={tower.id}
                                    id={tower.id}
                                    name={tower.name}
                                    tier={tower.tier}
                                    image={tower.image}
                                    slots={tower.slots}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}

        </div>
    );
};
