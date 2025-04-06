import React from "react";
import { Inventory } from "../Inventory/Inventory";
import { ItemDisplay } from "../Item/ItemDisplay";
import { TowerDisplay } from "../Tower/TowerDisplay";
import { Grid } from "../Grid/Grid.tsx";

export const PageLayout: React.FC = () => {
    return (
        <div className="min-h-screen min-w-screen bg-blue-50 relative p-10">
            <div className="flex gap-4 bg-yellow-50 items-center">
                {/* Left Sidebar */}
                <div className="flex flex-col gap-4">
                    <Inventory/>
                    <ItemDisplay/>
                </div>

                {/* Main content */}
                <div className="flex flex-col flex-grow items-center bg-red-50 gap-4">
                    <TowerDisplay/>
                    <Grid isMurloc={false}/>
                </div>

                {/* Info Panel, wip*/}
                <div className="flex flex-col flex-grow items-center bg-purple-50 gap-4">

                </div>
            </div>
        </div>
    );
};
