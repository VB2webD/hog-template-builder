import {useTowerStore} from "../../state/towerStore.ts";
import React, {useState} from "react";
import {ShareButton} from "../Buttons/ShareButton.tsx";
import {ClearAllButton} from "../Buttons/ClearAllButton.tsx";

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
        <div className="mb-5 bg-gray-100 border rounded shadow flex items-center p-1 w-full max-w-2xl">
            {/* Title section - 2/3 width or max 2xl */}
            <div className="flex-grow max-w-1xl">
                {isEditing ? (
                    <input
                        type="text"
                        value={tempTitle}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        className="w-full text-center border rounded px-3 py-2 text-xl font-semibold bg-white"
                    />
                ) : (
                    <h2
                        onClick={handleClick}
                        className="text-xl font-semibold text-center cursor-pointer text-gray-800 w-full"
                    >
                        {title || <span className="text-gray-400">Enter build name</span>}
                    </h2>
                )}
            </div>
            <ShareButton/>
            <ClearAllButton/>
        </div>
    );
};
