export type CellType = 'tower' | 'murloc'

export interface validCell {
    row: number;
    col: number;
    type: CellType
}

export const validCells: validCell[] = [
    // top right
    {row: 3, col: 10, type: 'tower'},
    {row: 3, col: 11, type: 'tower'},
    {row: 4, col: 10, type: 'tower'},
    {row: 4, col: 11, type: 'tower'},

    // left
    {row: 5, col: 4, type: 'murloc'},
    {row: 5, col: 5, type: 'tower'},
    {row: 5, col: 6, type: 'tower'},
    {row: 6, col: 5, type: 'tower'},
    {row: 6, col: 6, type: 'tower'},
    {row: 7, col: 5, type: 'tower'},
    {row: 7, col: 6, type: 'tower'},
    {row: 8, col: 5, type: 'tower'},
    {row: 8, col: 6, type: 'tower'},

    // bot right
    {row: 8, col: 10, type: 'tower'},
    {row: 8, col: 11, type: 'tower'},
    {row: 8, col: 12, type: 'tower'},
    {row: 9, col: 10, type: 'tower'},
    {row: 9, col: 11, type: 'tower'},
    {row: 10, col: 10, type: 'murloc'},
    {row: 10, col: 11, type: 'tower'},


]