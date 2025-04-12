import React from 'react';
import { CellType } from '../../features/Grid/validCells';
import { flatTowers } from '../../features/Towers/towerData.ts';
import { PlacedTower } from '../../state/towerStore.ts';

interface GridItemProps {
    row: number;
    col: number;
    cellSize: number;
    validCells: { row: number; col: number; type: CellType }[];
    hoveredCell: { row: number; col: number } | null;
    isSelected: boolean;
    tower?: PlacedTower;
    onSelect: () => void;
}

const getBackgroundImage = (
    flatTowerImage: string | undefined,
    type: CellType | undefined
): string | undefined => {
    if (flatTowerImage) return `url(${flatTowerImage})`;
    if (type === CellType.Tower) return 'url("/TowerBase.png")';
    if (type === CellType.Murloc) return 'url("/MurlocHut.png")';
    return undefined;
};

export const GridCell: React.FC<GridItemProps> = ({
                                                      row,
                                                      col,
                                                      cellSize,
                                                      validCells,
                                                      hoveredCell,
                                                      isSelected,
                                                      tower,
                                                      onSelect,
                                                  }) => {
    const cellKey = `${row}-${col}`;
    const isHovered = hoveredCell?.row === row && hoveredCell?.col === col;
    const cell = validCells.find(c => c.row === row && c.col === col);

    const flatTower = tower ? flatTowers[tower.id] : null;
    const backgroundImage = getBackgroundImage(flatTower?.image, cell?.type);

    return (
        <div
            key={cellKey}
            onClick={() => cell && onSelect()}
            draggable={!!tower}
            onDragStart={(e) => {
                if (tower) {
                    e.dataTransfer.setData("tower-id", tower.id.toString());
                    e.dataTransfer.setData("from-cell", cellKey);
                }
            }}
            className={`absolute border border-gray-300 transition-colors duration-200
                ${cell ? 'cursor-pointer' : 'opacity-30 pointer-events-none'}
                ${isSelected ? 'bg-green-300' : isHovered ? 'bg-blue-200' : ''}
            `}
            style={{
                width: cellSize,
                height: cellSize,
                top: row * cellSize,
                left: col * cellSize,
                backgroundImage,
                backgroundSize: 'cover'
            }}
        />
    );
};
