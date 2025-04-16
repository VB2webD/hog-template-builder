import React from "react";
import {ItemDisplay} from "../Item/ItemDisplay";
import {TowerDisplay} from "../Tower/TowerDisplay";
import {Grid} from "../Grid/Grid.tsx";
import {InventoryDisplay} from "../Inventory/InventoryDisplay.tsx";
import {TitleDisplay} from "../Title/TitleDisplay.tsx";
import {PinnedDisplay} from "../PinnedHeroes/PinnedDisplay.tsx";
import {Toaster} from "react-hot-toast";
import {EquipmentDisplay} from "../Equipment/EquipmentDisplay.tsx";


export const PageLayout: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col p-2">

            <Toaster position="bottom-center" />

            {/* 3-Column Grid */}
            <div className="grid grid-cols-[3fr_5fr_3fr] gap-2">
                {/* Left Sidebar */}
                <div className="flex flex-col gap-7">
                    <TitleDisplay/>

                    <InventoryDisplay/>

                    <TowerDisplay/>

                    <EquipmentDisplay/>
                </div>

                {/* Center Column */}
                <div className="flex flex-col items-center gap-2">
                    <ItemDisplay/>
                    <Grid isMurloc={false}/>
                </div>

                {/* Right Sidebar */}
                <div className="flex flex-col place-content-center gap-4 p-2">
                    <PinnedDisplay/>
                </div>
            </div>
        </div>
    );
};
