import {useTowerStore} from "../../state/towerStore.ts";
import {Trash2} from "lucide-react";
import toast from "react-hot-toast";

export const ClearAllButton: React.FC = () =>{
    const resetStore = useTowerStore(state => state.resetStore)

    const handleClick= () =>{
        resetStore()
        toast.success('Build deleted')
    }

    return (
        <button
        onClick={handleClick}><Trash2 className="text-red-500 rounded block"/></button>
    )
}