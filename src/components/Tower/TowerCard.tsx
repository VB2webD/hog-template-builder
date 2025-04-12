import React, { useState } from "react";

export interface TowerCardProps {
    id: number;
    name: string;
    image: string;
    tier: number;
    slots: number;
}

export const TowerCard: React.FC<TowerCardProps> = ({ id, name, image }) => {
    const [hover, setHover] = useState(false);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        // Pass only the ID to be interpreted on drop
        e.dataTransfer.setData("tower-id", id.toString());
    };

    return (
        <div
            className="w-16 h-16 cursor-move relative rounded border bg-white"
            draggable
            onDragStart={handleDragStart}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {hover && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg z-10 whitespace-nowrap">
                    <div className="font-bold">{name}</div>
                </div>
            )}
        </div>
    );
};
