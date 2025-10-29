import React from "react";

export default function Nav({
    setTab,
}: {
    setTab: (view: string) => void;
}): React.ReactNode {
    return (
        <nav className="flex bg-gray-800 text-white cursor-pointer">
            <div
                className="p-5 hover:bg-gray-500"
                onClick={() => {
                    setTab("Caesar");
                }}
            >
                Caesar
            </div>
            <div
                className="p-5 hover:bg-gray-500"
                onClick={() => {
                    setTab("Vigenere");
                }}
            >
                Vigenere
            </div>
            <div
                className="p-5 hover:bg-gray-500"
                onClick={() => {
                    setTab("Playfair");
                }}
            >
                Playfair
            </div>
        </nav>
    );
}
