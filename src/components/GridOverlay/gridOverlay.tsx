import React from 'react';
import {CellType} from "../../features/grid/validCells.ts";

export interface GridOverlayProps {
    rows: number;
    cols: number;
    cellSize: number;
    clickableCells?: { row: number; col: number; type: CellType }[];
    hoveredCell?: { row: number; col: number } | null;
    selectedCell?: { row: number; col: number } | null;
    onClick?: (row: number, col: number) => void;
}

function getBackgroundImageByType(type: CellType | undefined): string | undefined {
    switch (type) {
        case CellType.Tower:
            return 'url("/towerBase.png")';
        case CellType.Murloc:
            return 'url("/murlocHut.png")';
        default:
            return undefined;
    }
}

export const GridOverlay: React.FC<GridOverlayProps> = ({
                                                            rows,
                                                            cols,
                                                            cellSize,
                                                            clickableCells = [],
                                                            hoveredCell,
                                                            selectedCell,
                                                            onClick,
                                                        }) => {
    const getCellKey = (row: number, col: number) => `${row}-${col}`;

    return (
        <div
            className="absolute top-0 left-0"
            style={{width: cols * cellSize, height: rows * cellSize}}
        >
            {Array.from({length: rows}).map((_, row) =>
                Array.from({length: cols}).map((_, col) => {
                    const cell = clickableCells.find(c => c.row === row && c.col === col);
                    const type = cell?.type;
                    const isHovered = hoveredCell?.row === row && hoveredCell?.col === col;
                    const isSelected = selectedCell?.row === row && selectedCell?.col === col;


                    return (
                        <div
                            key={getCellKey(row, col)}
                            onClick={() => cell ?? onClick?.(row, col)}
                            className={`absolute border border-gray-300 transition-colors duration-200 cursor pointer
                                ${cell ? 'cursor-pointer' : 'opacity-30 pointer-events-none'}
                                ${isSelected ? 'bg-green-300' : isHovered ? 'bg-blue-200' : ''}
                            }`}
                            style={{
                                width: cellSize,
                                height: cellSize,
                                top: row * cellSize,
                                left: col * cellSize,
                                backgroundImage: getBackgroundImageByType(type),
                                backgroundSize: 'cover',
                            }}
                        />
                    );
                })
            )}
        </div>
    );
};
