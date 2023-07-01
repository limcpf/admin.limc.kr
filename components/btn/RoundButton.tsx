import React from "react";

type Props = {
  onClick: () => void;
  text: string
}
export default function RoundButton({onClick, text}:Props) {
  const className = "col-span-1 text-gray-700 bg-white border border-gray-300  hover:bg-gray-100 font-medium rounded-full text-sm px-3 py-1.5";
    return <button type="button" className={className} onClick={onClick}>
      {text}
    </button>;
}