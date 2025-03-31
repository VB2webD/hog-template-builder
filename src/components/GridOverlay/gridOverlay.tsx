import React from 'react';

export interface GridOverlayProps {
    rows: number;
    cols: number;
    cellSize: number;
    clickableCells?: { row: number; col: number }[];
    hoveredCell?: { row: number; col: number } | null;
    onCellClick?: (row: number, col: number) => void;
}

export const GridOverlay: React.FC<GridOverlayProps> = ({
                                                            rows,
                                                            cols,
                                                            cellSize,
                                                            clickableCells = [],
                                                            hoveredCell,
                                                            onCellClick,
                                                        }) => {
    const getCellKey = (row: number, col: number) => `${row}-${col}`;

    const isCellClickable = (row: number, col: number) =>
        clickableCells.some(c => c.row === row && c.col === col);

    return (
        <div
            className="absolute top-0 left-0"
            style={{
                width: cols * cellSize,
                height: rows * cellSize,
                boxSizing: 'content-box'
            }}
        >
            {Array.from({length: rows}).map((_, row) =>
                Array.from({length: cols}).map((_, col) => {
                    const isSelected = clickableCells.some(c => c.row === row && c.col === col);
                    const isHovered = hoveredCell?.row === row && hoveredCell?.col === col;
                    const clickable = isCellClickable(row, col)

                    return (
                        <div
                            key={getCellKey(row, col)}
                            onClick={() => isCellClickable ?? onCellClick?.(row, col)}
                            className={`absolute border border-gray-300 transition-colors duration-200 cursor pointer
                                ${clickable ? '' : 'opacity-30 pointer-events-none'}
                                ${isSelected ? 'bg-green-300' : isHovered ? 'bg-blue-200' : ''}
                            }`}
                            style={{
                                width: cellSize,
                                height: cellSize,
                                top: row * cellSize,
                                left: col * cellSize,
                            }}
                        />
                    );
                })
            )}
        </div>
    );
};
