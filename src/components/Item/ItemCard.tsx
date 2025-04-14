import { useTowerStore } from "../../state/towerStore.ts";
import {addItemOnFirstEmptySlot, getItemShadowClass, handleItemHover} from "../../features/Items/itemHelper.ts";
import { itemData } from "../../features/Items/itemData.ts";

interface ItemCardProps {
    id: number;
}

export const ItemCard: React.FC<ItemCardProps> = ({ id }) => {
    const selectedTowerId = useTowerStore(state => state.selectedTowerId);

    const item = itemData[id];

    return (
        <div
            className={`w-16 h-16 cursor-move relative rounded border bg-white ${getItemShadowClass(item.tags)}
            `}
            draggable
            onDoubleClick={() => {
                if (selectedTowerId !== null) {
                    addItemOnFirstEmptySlot(selectedTowerId, id);
                }
            }}
            onDragStart={(e) => e.dataTransfer.setData("item-id", id.toString())}
            onMouseEnter={() => handleItemHover(id)}
            onMouseLeave={() => handleItemHover(null)}
            style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        />

    );
};
