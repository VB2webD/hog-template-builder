import React, {useState} from 'react';
import {GridOverlay} from '../GridOverlay/gridOverlay.tsx'
import {useValidCells} from "../../features/grid/useValidCells.ts";
import {gridConfig} from "../../features/grid/gridConfig.ts";

export const Grid: React.FC<{ isMurloc: boolean }> = ({isMurloc}) => {

    const {row, col, cellSize} = gridConfig;
    const validCells = useValidCells(isMurloc);
    const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
    const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);

    const handleClick = (row: number, col: number) =>
        validCells.some(c => c.row === row && c.col === col) && setSelectedCell({ row, col });


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

    return (
        <div
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
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
            />
        </div>
    );
};
