import React, { useState } from 'react';
import { GridOverlay } from '../GridOverlay/gridOverlay.tsx'

interface GridProps {
    rows: number;
    cols: number;
    cellSize: number;
}

export const Grid: React.FC<GridProps> = ({ rows, cols, cellSize }) => {
    const [selectedCells, setSelectedCells] = useState<{ row: number; col: number }[]>([]);
    const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null);

    const handleCellClick = (row: number, col: number) => {
        const alreadySelected = selectedCells.some(c => c.row === row && c.col === col);
        if (alreadySelected) {
            setSelectedCells(prev => prev.filter(c => c.row !== row || c.col !== col));
        } else {
            setSelectedCells(prev => [...prev, { row, col }]);
        }
    };

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

    return (
        <div
            className="relative"
            style={{ width: cols * cellSize, height: rows * cellSize }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Optional background grid pattern */}
            <div
                className="absolute top-0 left-0 z-0"
                style={{
                    width: cols * cellSize,
                    height: rows * cellSize,
                    backgroundSize: `${cellSize}px ${cellSize}px`,
                    backgroundImage:
                        'linear-gradient(to right, #ccc 1px, transparent 1px), linear-gradient(to bottom, #ccc 1px, transparent 1px)',
                }}
            />

            {/* Tower placement overlay */}
            <GridOverlay
                rows={rows}
                cols={cols}
                cellSize={cellSize}
                clickableCells={[{row: 10, col:11}]}
                hoveredCell={hoveredCell}
                onCellClick={handleCellClick}
            />

            {/* Optional: towers/items rendered here later */}
        </div>
    );
};
