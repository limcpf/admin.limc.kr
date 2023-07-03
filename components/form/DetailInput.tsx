import React from "react";
import { DetailFormInputOption, DetailFormInputType, DetailSelectData } from "@/types/form";

export default function DetailInput<T>({
  type,
  value,
  id,
  option = {},
  selectData
}: {
  type: DetailFormInputType;
  value: T[keyof T];
  id: keyof T;
  option?: DetailFormInputOption;
  selectData?: { [key: string]: DetailSelectData[]; }  | undefined
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
  // selectData 받아서 하는걸로 만들어야햄
  const selectInput = (
    selectData: { [key: string]: DetailSelectData[]; }
  ) => {
    const id = option && option.selectDataId ? option.selectDataId : ""
    const data = selectData[id]; 
    return (<select id={idStr} name={idStr} className={className} required={option.required} disabled={option.disabled} defaultValue="">
      {
        data.map(({key, value}: DetailSelectData, i:number) => <option key={idStr+i} value={`${value}`}>{key}</option>)
      }
    </select> )
  }

  if(type === "TEXT") return textInput;
  else if(type === "SELECT" && selectData) return selectInput(selectData); 
  else return numberInput;
}
