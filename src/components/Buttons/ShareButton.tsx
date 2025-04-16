import {useSearchParams} from "react-router-dom";
import toast from "react-hot-toast";
import {Clipboard} from "lucide-react";

export const ShareButton: React.FC = () => {
    const [searchParams] = useSearchParams();

    const handleCopy = async () => {
        const state = searchParams.get("state");
        if (!state) return;
        const url = `${window.location.origin}${window.location.pathname}?state=${state}`;
        try {
            await navigator.clipboard.writeText(url);
            toast.success('copied Link to clipboard')
        } catch (e) {
            console.error("Failed to copy URL:", e);
        }

    };

    return (
        <button
            onClick={handleCopy}>
            <Clipboard className="text-black-500 rounded block active:scale-95 transition duration-350 ease-in-out"/>
        </button>
    );
};
