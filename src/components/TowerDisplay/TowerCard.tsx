import React from "react";

interface TowerCardProps {
    name: string;
    image: string;
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const TowerCard: React.FC<TowerCardProps> = ({name, image, onDragStart}) => {
    return (
        <div className="border rounded p-2 cursor-move bg-white"
             draggable={true}
             onDragStart={onDragStart}
        >
            <img src={image} alt={name} className="w-24 h-24 object-contain"/>
            <div className="text-center">{name}
            </div>
        </div>
    );
}