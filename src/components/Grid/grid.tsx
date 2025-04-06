import React, { useState } from 'react';
import { useValidCells } from "../../features/Grid/useValidCells.ts";
import { gridConfig } from "../../features/Grid/gridConfig.ts";
import { TowerEntity } from "../../entities/towerEntity";
import { useTowerStore } from "../../state/towerStore.ts";
import { GridCell } from './gridCell.tsx';

export const Grid: React.FC<{ isMurloc: boolean }> = ({ isMurloc }) => {
    const validCells = useValidCells(isMurloc);
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const setSelectedTowerId = useTowerStore(state => state.setSelectedTowerId);
    const towers = useTowerStore(state => state.towers);
    const setTower = useTowerStore(state => state.setTower);


    const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);
    const { row: rows, col: cols, cellSize } = gridConfig;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / cellSize);
        const y = Math.floor((e.clientY - rect.top) / cellSize);

        if (x >= 0 && x < cols && y >= 0 && y < rows) {
            setHoveredCell({ row: y, col: x });
        } else {
            setHoveredCell(null);
        }
    };

    const handleMouseLeave = () => {
        setHoveredCell(null);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const tower: TowerEntity = JSON.parse(e.dataTransfer.getData("tower-entity"));
        const fromCell = e.dataTransfer.getData("from-cell");
        const rect = e.currentTarget.getBoundingClientRect();

        const x = Math.floor((e.clientX - rect.left) / cellSize);
        const y = Math.floor((e.clientY - rect.top) / cellSize);
        const key = `${y}-${x}`;

        const isValid = validCells.some(cell => cell.row === y && cell.col === x);
        if (!isValid || !tower) return;

        setTower(key, tower);

        if (fromCell && fromCell !== key) {
            setTower(fromCell, null);
        }

        // Optional: auto-select the newly dropped tower
        setSelectedTowerId(key);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const getCellKey = (row: number, col: number) => `${row}-${col}`;

    return (
        <div
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
                width: cols * cellSize,
                height: rows * cellSize,
            }}
        >
            {Array.from({ length: rows }).map((_, y) =>
                Array.from({ length: cols }).map((_, x) => {
                    const cellKey = getCellKey(y, x);
                    const tower = towers[cellKey];
                    const isSelected = selectedTowerId === cellKey;

                    return (
                        <GridCell
                            key={cellKey}
                            row={y}
                            col={x}
                            cellSize={cellSize}
                            validCells={validCells}
                            hoveredCell={hoveredCell}
                            isSelected={isSelected}
                            tower={tower}
                            onSelect={() => setSelectedTowerId(cellKey)}
                        />
                    );
                })
            )}
        </div>
    );
};