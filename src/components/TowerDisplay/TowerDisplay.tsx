import React from "react";
import {towersByRace} from "../../features/TowerDisplay/towerData";
import {TowerCard} from "./TowerCard";


export const TowerDisplay: React.FC = () => {
    const humanTowers = towersByRace["Human"];

    const handleTowerDragStart = (image: string) => (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("tower-image", image);
    };

    return (
        <div className="grid grid-cols-3 gap-2 p-4">
            {humanTowers.map((tower) => (
                <TowerCard
                    key={tower.name}
                    name={tower.name}
                    image={tower.image}
                    onDragStart={handleTowerDragStart(tower.image)}
                />
            ))}
        </div>
    );
};
