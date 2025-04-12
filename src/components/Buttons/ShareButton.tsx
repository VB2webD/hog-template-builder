
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const ShareButton: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        const state = searchParams.get("state");
        if (!state) return;

        const url = `${window.location.origin}${window.location.pathname}?state=${state}`;
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            console.error("Failed to copy URL:", e);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="px-4 py-2 bg-purple-500 text-black rounded hover:bg-blue-600 transition"
        >
            {copied ? "Copied!" : "Share Build"}
        </button>
    );
};
