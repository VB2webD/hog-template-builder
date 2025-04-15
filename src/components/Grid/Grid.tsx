import React, {useState} from 'react';
import {useValidCells} from "../../features/Grid/useValidCells.ts";
import {gridConfig} from "../../features/Grid/gridConfig.ts";
import {useTowerStore} from "../../state/towerStore.ts";
import {GridCell} from './GridCell.tsx';

export const Grid: React.FC<{ isMurloc: boolean }> = ({isMurloc}) => {
    const validCells = useValidCells(isMurloc);
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const setSelectedTowerId = useTowerStore(state => state.setSelectedTowerId);
    const towers = useTowerStore(state => state.towers);
    const setTower = useTowerStore(state => state.setTower);


    const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);
    const {row: rows, col: cols, cellSize} = gridConfig;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / cellSize);
        const y = Math.floor((e.clientY - rect.top) / cellSize);

        if (x >= 0 && x < cols && y >= 0 && y < rows) {
            setHoveredCell({row: y, col: x});
        } else {
            setHoveredCell(null);
        }
    };

    const handleMouseLeave = () => {
        setHoveredCell(null);
    };

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!selectedTowerId) return;
        setTower(selectedTowerId, null);
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const towerIdRaw = e.dataTransfer.getData("tower-id");
        const fromCell = e.dataTransfer.getData("from-cell");

        const towerId = parseInt(towerIdRaw, 10);
        if (isNaN(towerId)) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / cellSize);
        const y = Math.floor((e.clientY - rect.top) / cellSize);
        const key = `${y}-${x}`;

        const isValid = validCells.some(cell => cell.row === y && cell.col === x);
        if (!isValid) return;

        setTower(key, towers[fromCell]);

        if (fromCell && fromCell !== key) {
            setTower(fromCell, null);
        }

        setSelectedTowerId(key);
    };


    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const getCellKey = (row: number, col: number) => `${row}-${col}`;

    return (
        <div
            className="relative select-none"
            onMouseMove={handleMouseMove}
            onContextMenu={handleRightClick}
            onMouseLeave={handleMouseLeave}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
                width: cols * cellSize,
                height: rows * cellSize,
            }}
        >
            {Array.from({length: rows}).map((_, y) =>
                Array.from({length: cols}).map((_, x) => {
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