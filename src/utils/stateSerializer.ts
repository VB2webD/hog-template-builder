// src/utils/stateSerializer.ts
import LZString from "lz-string";
import { TowerEntity } from "../entities/towerEntity";

export type TowerStoreState = {
    towers: Record<string, TowerEntity>;
    selectedTowerId: string | null;
}

export function compressState(state: TowerStoreState): string {
    return LZString.compressToEncodedURIComponent(JSON.stringify(state));
}

export function decompressState(compressed: string): TowerStoreState | null {
    try {
        const json = LZString.decompressFromEncodedURIComponent(compressed);
        return json ? JSON.parse(json) : null;
    } catch {
        return null;
    }
}
