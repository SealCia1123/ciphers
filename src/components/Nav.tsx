import React from "react";
import "./NavStyle.css";

export default function Nav({
  tab,
  setTab,
}: {
  tab: string;
  setTab: (view: string) => void;
}): React.ReactNode {
  return (
    <nav className="flex bg-gray-800 text-white cursor-pointer">
      <div
        className={`p-5 hover:bg-gray-500 ${tab === "Caesar" ? "selected" : ""}`}
        onClick={() => {
          setTab("Caesar");
        }}
      >
        Caesar
      </div>
      <div
        className={`p-5 hover:bg-gray-500 ${tab === "Vigenere" ? "selected" : ""}`}
        onClick={() => {
          setTab("Vigenere");
        }}
      >
        Vigenere
      </div>
      <div
        className={`p-5 hover:bg-gray-500 ${tab === "Playfair" ? "selected" : ""}`}
        onClick={() => {
          setTab("Playfair");
        }}
      >
        Playfair
      </div>
    </nav>
  );
}
