import React from "react";

type Props = {
  index: number,
  col: number,
  text: string
}

export default function ListHeader({ index, col, text }:Props) {
  const key = `cell-from-header-${index}`
  const className = `cell-form-header text-center col-span-${col} font-light text-xs border-b-2 pb-1`;
  return (
      <div key={key} className={className}>{text}</div>
  )
}