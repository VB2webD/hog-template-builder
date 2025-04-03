import React, {useState} from 'react';
import {GridOverlay} from '../GridOverlay/gridOverlay.tsx'
import {useValidCells} from "../../features/Grid/useValidCells.ts";
import {gridConfig} from "../../features/Grid/gridConfig.ts";
import {TowerEntity} from "../../features/Grid/towerEntity.ts";


export const Grid: React.FC<{ isMurloc: boolean }> = ({isMurloc}) => {

    const {row, col, cellSize} = gridConfig;
    const validCells = useValidCells(isMurloc);
    const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
    const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);
    const [placedTowers, setPlacedTowers] = useState<Record<string, TowerEntity>>({});

    const handleClick = (row: number, col: number) =>
        validCells.some(c => c.row === row && c.col === col) && setSelectedCell({row, col});


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / cellSize);
        const y = Math.floor((e.clientY - rect.top) / cellSize);

        if (x >= 0 && x < col && y >= 0 && y < row) {
            setHoveredCell({row: y, col: x});
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
        console.log('tower: ', tower);
        const x = Math.floor((e.clientX - rect.left) / cellSize);
        const y = Math.floor((e.clientY - rect.top) / cellSize);
        const key = `${y}-${x}`;

        const isValid = validCells.some(cell => cell.row === y && cell.col === x);
        if (!isValid || !tower) return;


        if (isValid && tower) {
            setPlacedTowers(prev => {
                const updated = {...prev};

                if (fromCell && updated[fromCell]) {
                    delete updated[fromCell];
                }

                updated[key] = tower

                return updated;
            });
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    return (
        <div
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
                width: col * cellSize,
                height: row * cellSize,
            }}
        >
            <GridOverlay
                rows={row}
                cols={col}
                cellSize={cellSize}
                clickableCells={validCells}
                hoveredCell={hoveredCell}
                selectedCell={selectedCell}
                onClick={handleClick}
                placedTowers={placedTowers}
            />
        </div>
    );
};
