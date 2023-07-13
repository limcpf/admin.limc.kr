import React, { useEffect, useRef, useState } from "react";
import {
  SelectDataList,
  SelectInputProp,
} from "@/components/form/input/interface/SelectInput.interface";
import { DetailSelectData } from "@/types/form";

export default function SelectInput<T>({
  input,
  dataFunction,
  setFunction,
  parentValue,
}: {
  input: SelectInputProp<T>;
  setFunction?: Function;
  dataFunction?: (key?: string) => Promise<any>;
  parentValue?: string;
}) {
  const { id, isChild, value, option = {} } = input;
  const [data, setData] = useState<SelectDataList[]>([]);
  const ref = useRef<HTMLSelectElement>(null);
  const [v, setV] = useState<string>(value);

  const { disabled, required } = option;

  let className =
    "block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ";

  useEffect(() => {
    if (setFunction) setFunction(v);
    if (isChild) {
      if (!parentValue) {
        setData([]);
        if (ref.current) ref.current.value = "";

        return;
      }
    }
    if (!dataFunction) return;
    dataFunction(parentValue).then((d) => {
      if (ref.current) ref.current.value = "";
      setData(d as SelectDataList[]);
    });
  }, [parentValue]);
  return (
    <select
      id={id}
      name={id}
      ref={ref}
      className={className}
      required={required}
      disabled={disabled}
      value={v}
      onChange={(evt) => {
        if (setFunction) setFunction(evt.currentTarget.value);
        setV(evt.currentTarget.value);
      }}
    >
      <option value="">데이터를 선택해주세요</option>
      {data &&
        data.map(({ key, value }: DetailSelectData, i: number) => (
          <option key={id + i} value={`${value}`}>
            {key}
          </option>
        ))}
    </select>
  );
}
// const selectInput = V(selectData: { [key: string]: DetailSelectData[] }) => {
//   const id = option && option.selectDataId ? option.selectDataId : "";
//   const data = selectData[id];
//   return (
//       <select
//           id={idStr}
//           name={idStr}
//           className={className}
//           required={option.required}
//           disabled={option.disabled}
//           defaultValue={String(value) || ""}
//       >
//         {data.map(({ key, value }: DetailSelectData, i: number) => (
//             <option key={idStr + i} value={`${value}`}>
//               {key}
//             </option>
//         ))}
//       </select>
//   );
// };
