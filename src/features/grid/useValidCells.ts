import {useMemo} from "react";
import {validCell, validCells} from "./validCells.ts";

export function useValidCells(isMurloc: boolean): validCell[] {
    return useMemo(() => {
        return validCells.filter(cell =>
            cell.type === 'tower' || isMurloc && cell.type === 'murloc');
    }, [isMurloc]);
}