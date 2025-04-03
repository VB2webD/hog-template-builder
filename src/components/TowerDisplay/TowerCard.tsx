import React from "react";
import {TowerEntity} from "../../features/Grid/towerEntity.ts";

export interface TowerCard {
    name: string,
    image: string
}


export const TowerCard: React.FC<TowerCard> = ({name, image}) => {


    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        const towerEntity: TowerEntity = {
            name,
            image,
            items: []
        }
        e.dataTransfer.setData("tower-entity", JSON.stringify(towerEntity));
        console.log('towerCard, etity: ', towerEntity)
    };

    return (
        <div className="border rounded p-2 cursor-move bg-white"
             draggable={true}
             onDragStart={handleDragStart}
        >
            <img src={image} alt={name} className="w-24 h-24 object-contain"/>
            <div className="text-center">{name}
            </div>
        </div>
    );
}