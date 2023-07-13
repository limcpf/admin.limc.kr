import React from "react";
import { TextAreaInputProp } from "@/components/form/input/interface/TextAreaInput.interface";

export default function TextAreaInput<T>({
  input,
}: { input: TextAreaInputProp<T> }) {
  const { id, value, option } = input;
  const { disabled, visible, required, rows } = option;
  let className =
    "block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-200 disabled:border-gray-300";
  if (visible) className += " hidden";
  return (
    <textarea
      id={id}
      name={id}
      defaultValue={value && value}
      className={className}
      disabled={disabled}
      required={required}
      rows={rows}
    ></textarea>
  );
}
