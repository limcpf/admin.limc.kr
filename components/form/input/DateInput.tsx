import { TextInputProp } from "@/components/form/input/interface/TextInput.interface";
import React from "react";
import DateUtil from "@/lib/util/Date.util";

export default function textInput<T>({
  input,
}: {
  input: TextInputProp<T>;
}) {
  const dateUtil = DateUtil.getInstance();
  const { id, value, type, option = {} } = input;
  const { disabled, visible, required } = option;
  let className =
    "block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ";
  if (visible) className += " hidden";
  return (
    <input
      type="text"
      id={id}
      name={id}
      defaultValue={dateUtil.date2Kr(value)}
      className={className}
      disabled={disabled}
      required={required}
    />
  );
}
