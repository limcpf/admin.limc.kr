import React from "react";

export default function DetailLabel<T>({
  id,
  name,
}: {
  id: keyof T;
  name: string;
}) {
  return (
    <label
      htmlFor={String(id)}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {name}
    </label>
  );
}
