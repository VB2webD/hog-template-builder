import React from 'react';
import {CellType} from "../../features/Grid/validCells.ts";
import {TowerEntity} from "../../entities/towerEntity.ts";


export interface GridOverlayProps {
    rows: number;
    cols: number;
    cellSize: number;
    clickableCells?: { row: number; col: number; type: CellType }[];
    hoveredCell?: { row: number; col: number } | null;
    selectedCell?: { row: number; col: number } | null;
    onClick?: (row: number, col: number) => void;
    placedTowers?: Record<string, TowerEntity>
}

function getBackgroundImageByType(type: CellType | undefined): string | undefined {
    switch (type) {
        case CellType.Tower:
            return 'url("/TowerBase.png")';
        case CellType.Murloc:
            return 'url("/MurlocHut.png")';
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
                                                            placedTowers
                                                        }) => {
    const getCellKey = (row: number, col: number) => `${row}-${col}`;
console.log(placedTowers);
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
                    const placedTower = placedTowers?.[`${row}-${col}`];


                    return (
                        <div
                            key={getCellKey(row, col)}
                            onClick={() => cell && onClick?.(row, col)}
                            draggable={!!placedTower}
                            onDragStart={(e) => {
                                if (placedTower) {
                                    e.dataTransfer.setData("tower-entity", JSON.stringify(placedTower));
                                    e.dataTransfer.setData("from-cell", `${row}-${col}`);
                                }
                            }}

                            className={`absolute border border-gray-300 transition-colors duration-200 cursor pointer
                                ${cell ? 'cursor-pointer' : 'opacity-30 pointer-events-none'}
                                ${isSelected ? 'bg-green-300' : isHovered ? 'bg-blue-200' : ''}
                            }`}
                            style={{
                                width: cellSize,
                                height: cellSize,
                                top: row * cellSize,
                                left: col * cellSize,
                                backgroundImage: placedTower ?
                                    `url(${placedTower.image})`
                                    : getBackgroundImageByType(type),
                                backgroundSize: 'cover',
                            }}
                        />
                    );
                })
            )}
        </div>
    );
};
