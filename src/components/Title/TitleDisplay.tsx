import { useTowerStore } from "../../state/towerStore.ts";
import React, { useState } from "react";

export const TitleDisplay: React.FC = () => {
    const title = useTowerStore(state => state.title);
    const setTitle = useTowerStore(state => state.setTitle);
    const [isEditing, setIsEditing] = useState(false);
    const [tempTitle, setTempTitle] = useState(title);

    const handleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempTitle(e.target.value);
    };

    const handleBlur = () => {
        setTitle(tempTitle.trim());
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleBlur();
        }
    };

    return (
        <div className="mb-4 bg-gray-100 border rounded shadow">
            {isEditing ? (
                <input
                    type="text"
                    value={tempTitle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className="border rounded px-2 py-1 text-sm w-full"
                />
            ) : (
                <h3 onClick={handleClick} className="text-xl font-semibold cursor-pointer">
                    {title || "Enter build Name"}
                </h3>
            )}
        </div>
    );
};
