import {useMemo} from "react";
import {CellType, validCell, validCells} from "./validCells.ts";

export function useValidCells(isMurloc: boolean): validCell[] {
    return useMemo(() => {
        return validCells.map(cell => {
            if (isMurloc && cell.type === CellType.Murloc) {
                return { ...cell, type: CellType.Tower };
            }
            return cell;
        });
    }, [isMurloc]);
}