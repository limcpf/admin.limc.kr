import React from "react";
import { DetailFormInputOption } from "@/types/form";

export default function DetailInput<T>({
  type,
  value,
  id,
  option = {},
}: {
  type: "TEXT" | "NUMBER";
  value: T[keyof T];
  id: keyof T;
  option?: DetailFormInputOption;
}) {
  const idStr = String(id);
  const className =
    "block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ";

  const textInput = (
    <input
      type="text"
      id={idStr}
      name={idStr}
      className={className}
      disabled={option.disabled}
      defaultValue={String(value)}
      required={option.required}
      maxLength={option.max}
      minLength={option.min}
    />
  );

  const numberInput = (
    <input
      type="number"
      id={idStr}
      name={idStr}
      className={className}
      disabled={option.disabled}
      defaultValue={Number(value)}
      required={option.required}
      maxLength={option.max}
      minLength={option.min}
    />
  );

  return type === "TEXT" ? textInput : numberInput;
}
