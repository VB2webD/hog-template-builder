import React from "react";
import {towersByRace} from "../../features/TowerDisplay/towerData";
import {TowerCard} from "./TowerCard";


export const TowerDisplay: React.FC = () => {
    const humanTowers = towersByRace["Human"];



    return (
        <div className="grid gap-2 p-4 bg-gray-100 border rounded shadow inline-block">
            {humanTowers.map((tower) => (
                <TowerCard
                    key={tower.name}
                    name={tower.name}
                    image={tower.image}
                />
            ))}
        </div>
    );
};
