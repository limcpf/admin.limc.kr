import React, { CSSProperties } from "react";

type Props = {
  index: number;
  col: number;
  text: string;
};

export default function ListFormHeader({ index, col, text }: Props) {
  const width = col * 90;
  const key = `cell-from-header-${index}`;
  const className = `cell-form-header text-center font-light text-xs border-b-2 pb-1`;
  const style: CSSProperties = { width: `${width}px` };
  return (
    <div key={key} className={className} style={style}>
      {text}
    </div>
  );
}
