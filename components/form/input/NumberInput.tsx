import React from "react";
import { NumberInputProp } from "@/components/form/input/interface/NumberInput.interface";

export default function NumberInput<T>({
  input,
}: {
  input: NumberInputProp<T>;
}) {
  const { id, value, option = {} } = input;
  const { disabled, visible, required, min, max } = option;
  let className =
    "block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ";
  if (visible) className += " hidden";
  return (
    <input
      type="number"
      id={id}
      name={id}
      defaultValue={value || 0}
      className={className}
      disabled={disabled}
      required={required}
      min={min}
      max={max}
    />
  );
}
