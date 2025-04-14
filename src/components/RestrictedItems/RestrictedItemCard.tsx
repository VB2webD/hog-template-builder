
import { itemData } from "../../features/Items/itemData";
import {
    addItemOnFirstEmptySlot,
    getItemShadowClass, handleItemHover,
    setItemDragData
} from "../../features/Items/itemHelper.ts";
import { useTowerStore } from "../../state/towerStore.ts";

interface RestrictedItemCardProps {
    itemId: number;
}

export const RestrictedItemCard: React.FC<RestrictedItemCardProps> = ({ itemId }) => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);
    const item = itemData[itemId];

    if (!item) return null;

    return (
        <div
            className={`
                relative w-16 h-16 bg-white flex items-center justify-center
                ${getItemShadowClass(item.tags)}
            `}
            style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            draggable
            onDragStart={(e) => {
                setItemDragData(e, itemId, -1);
            }}
            onDoubleClick={() => {
                addItemOnFirstEmptySlot(selectedTowerId, itemId);
            }}
            onMouseEnter={() => { handleItemHover(itemId)}}
            onMouseLeave={() => { handleItemHover(null)}}
        >
        </div>
    );
};
