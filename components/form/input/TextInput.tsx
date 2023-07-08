import { TextInputProp } from "@/components/form/input/interface/TextInput.interface";
import React from "react";

export default function TextInput<T>({
  input,
}: {
  input: TextInputProp<T>;
}) {
  const { id, value, type, option = {} } = input;
  const { disabled, visible, required, minLength, maxLength, regExp } = option;
  let className =
    "block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ";
  if (visible) className += " hidden";
  return (
    <input
      type="text"
      id={id}
      name={id}
      defaultValue={value && value}
      className={className}
      disabled={disabled}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
    />
  );
}
