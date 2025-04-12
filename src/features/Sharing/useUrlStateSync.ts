import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { compressState, decompressState } from "../../utils/stateSerializer";
import { useTowerStore } from "../../state/towerStore";

export const useUrlSync = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const towerStore = useTowerStore

    // 1️⃣ Load from URL on mount
    useEffect(() => {
        const stateParam = searchParams.get("state");
        if (stateParam) {
            const decompressed = decompressState(stateParam);
            if (decompressed) {
                towerStore.getState().loadPersistedState(decompressed);
                console.log("[useUrlSync] Loaded state from URL");
            }
        }
    }, [searchParams, towerStore]);

    // 2️⃣ Subscribe to changes in the minimal persisted state
    useEffect(() => {
        const unsubscribe = towerStore.subscribe(
            (persistedState) => {
                const compressed = compressState(persistedState);
                setSearchParams({ state: compressed });
                console.log("[useUrlSync] Synced state to URL");
            },
        );

        return () => unsubscribe();
    }, [setSearchParams, towerStore]);
};
