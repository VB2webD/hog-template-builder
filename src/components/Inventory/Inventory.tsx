import React from "react";
import { useTowerStore } from "../../state/towerStore";

export const Inventory: React.FC = () => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const towers = useTowerStore(state => state.towers);
    const tower = selectedTowerId ? towers[selectedTowerId] : null;
    const addItemToTower = useTowerStore(state => state.addItemToTower);

    const items = tower?.items || [];

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const item = JSON.parse(e.dataTransfer.getData("item-entity"));
        if (selectedTowerId && item?.image) {
            addItemToTower(selectedTowerId, item.image);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div className="p-4 w-64 bg-gray-100 border rounded shadow"
             onDrop={handleDrop}
             onDragOver={handleDragOver}>
            <h3 className="text-lg font-semibold mb-2">Inventory</h3>
            <div className="grid grid-cols-2 grid-rows-3 gap-1 items-center ">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-16 h-16 border border-gray-300 bg-white flex items-center justify-center"
                        style={{ backgroundSize: 'cover', backgroundImage: items[index] ? `url(${items[index]})` : undefined }}
                    >
                        {!items[index] && <span className="text-xs text-gray-400">Empty</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};
