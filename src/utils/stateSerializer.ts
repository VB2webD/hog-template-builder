// src/utils/stateSerializer.ts
import LZString from "lz-string";
import { PlacedTower } from "../state/towerStore";

// Define only the fields that need to be persisted
export type SerializedTowerState = {
    title: string;
    towers: Record<string, PlacedTower>;
    pinnedTowers: string[];
};

export function compressState(state: SerializedTowerState): string {
    return LZString.compressToEncodedURIComponent(JSON.stringify(state));
}

export function decompressState(compressed: string): SerializedTowerState | null {
    try {
        const json = LZString.decompressFromEncodedURIComponent(compressed);
        return json ? JSON.parse(json) : null;
    } catch {
        return null;
    }
}
