// src/hooks/useUrlSync.ts
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { compressState, decompressState } from "../../utils/stateSerializer";
import { useTowerStore } from "../../state/towerStore";

export const useUrlSync = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    // On initial mount, load from URL if available
    useEffect(() => {
        const stateParam = searchParams.get("state");
        if (stateParam) {
            const decompressed = decompressState(stateParam);
            if (decompressed) {
                useTowerStore.setState(decompressed);
                console.log('Found compressed state')
            }
        }
    }, [searchParams]); // only run on mount

    // Subscribe to relevant Zustand changes
    useEffect(() => {
        const unsubscribe = useTowerStore.subscribe(
            (syncedState) => {
                const compressed = compressState(syncedState);
                setSearchParams({ state: compressed });
                console.log(syncedState);
            }
        );

        return () => unsubscribe();
    }, [setSearchParams]);
};
