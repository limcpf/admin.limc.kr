import React from "react";

type Props = {
  onClick: () => void;
  text: string;
  type: "ROUNDED" | "SQUARE";
  className?: string;
  isSubmit?: boolean;
  disabled?: boolean;
};
export default function Button({
  onClick,
  text,
  type,
  className,
  isSubmit,
  disabled,
}: Props) {
  let cn =
    "mr-1 col-span-1 text-gray-700 bg-white border border-gray-300 font-medium text-sm px-3 py-1.5 hover:bg-gray-100 active:bg-gray-200 disabled:cursor-not-allowed";

  cn += className ? " " + className : "";
  cn += type === "ROUNDED" ? " rounded-full" : " rounded-lg";

  return (
    <button
      disabled={disabled}
      type={`${isSubmit ? "submit" : "button"}`}
      className={cn}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
