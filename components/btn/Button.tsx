import React from "react";

type Props = {
  onClick: () => void;
  text: string;
  type: "ROUNDED" | "SQUARE";
};
export default function Button({ onClick, text, type}: Props) {
  let className =
    "col-span-1 text-gray-700 bg-white border border-gray-300 font-medium text-sm px-3 py-1.5 hover:bg-gray-100 active:bg-gray-200";

  className += type === "ROUNDED" ? " rounded-full" : " rounded-lg" 
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
}
