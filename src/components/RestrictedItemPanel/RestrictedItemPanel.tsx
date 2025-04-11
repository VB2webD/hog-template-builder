import React, {useMemo} from "react";
import { restrictedItems} from "../../features/Items/restrictedItemData.ts";
import {ItemEntity} from "../../entities/itemEntity.ts";

interface RestrictedItemPanelProps {
    towerName: string;
    towerTier: number;
}


export const RestrictedItemPanel: React.FC<RestrictedItemPanelProps> = ({towerName, towerTier}) => {
  const items = useMemo(
      () => filterItems(towerName,towerTier),
      [towerName,towerTier]
  );

    function filterItems(towerName:string, towerTier:number):Array<ItemEntity> {
if (towerTier === 3) {
   return restrictedItems.filter(item => item.restrictedTo === towerName)
} else {
    return restrictedItems.filter(item => item.restrictedTo === towerTier)
}
        }

console.log(items);
return (
    <div className="grid grid-cols-1 gap-2 p-2">
        {items.map((item: ItemEntity) => (
            <div
                key={item.name}
                className="w-16 h-16 border border-gray-300 bg-white cursor-move"
                style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                }}
                draggable
                onDragStart={(e) => {
                    e.dataTransfer.setData("item-entity", JSON.stringify(item));
                    e.dataTransfer.setData("inventory-index", "-1");
                }}
            />
        ))}
    </div>
);
}
;
