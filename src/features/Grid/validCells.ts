export enum CellType {
    Tower,
    Murloc,
}

export interface validCell {
    row: number;
    col: number;
    type: CellType
}

const {Tower, Murloc} = CellType
export const validCells: validCell[] = [
    // top right
    {row: 3, col: 10, type: Tower},
    {row: 3, col: 11, type: Tower},
    {row: 4, col: 10, type: Tower},
    {row: 4, col: 11, type: Tower},

    // left
    {row: 5, col: 4, type: Murloc},
    {row: 5, col: 5, type: Tower},
    {row: 5, col: 6, type: Tower},
    {row: 6, col: 5, type: Tower},
    {row: 6, col: 6, type: Tower},
    {row: 7, col: 5, type: Tower},
    {row: 7, col: 6, type: Tower},
    {row: 8, col: 5, type: Tower},
    {row: 8, col: 6, type: Tower},

    // bot right
    {row: 8, col: 10, type: Tower},
    {row: 8, col: 11, type: Tower},
    {row: 8, col: 12, type: Tower},
    {row: 9, col: 10, type: Tower},
    {row: 9, col: 11, type: Tower},
    {row: 10, col: 10, type: Tower},
    {row: 10, col: 11, type: Tower},
    {row: 11, col: 10, type: Murloc},
    {row: 11, col: 11, type: Tower},


]