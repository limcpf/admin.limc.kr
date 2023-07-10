import {Input} from "@/components/form/input/interface/Input.interface";
import TextInput from "@/components/form/input/TextInput";
import {TextInputProp} from "@/components/form/input/interface/TextInput.interface";
import DateInput from "@/components/form/input/DateInput";
import NumberInput from "@/components/form/input/NumberInput";
import {NumberInputProp} from "@/components/form/input/interface/NumberInput.interface";
import SelectInput from "@/components/form/input/SelectInput";
import {SelectInputProp} from "@/components/form/input/interface/SelectInput.interface";
import React from "react";

export default function InputFactory<T>({
  input,
}: {
  input: Input<T>;
  setFunction?: Function;
  dataFunction?: (key?: string) => Promise<any>;
  parentValue?: string;
}) {
  const inputs = {
    TEXT: <TextInput input={input as TextInputProp<T>} />,
    DATE: <DateInput input={input as TextInputProp<T>} />,
    NUMBER: <NumberInput input={input as NumberInputProp<T>} />,
    SELECT: <></>
  };
  if(input.type === "SELECT") {
    const i = input as SelectInputProp<T>
    inputs["SELECT"] = (
        <SelectInput
          input={i}
          dataFunction={i.dataFunction}
          setFunction={i.setFunction}
          parentValue={i.parentValue}
        />
    )

  }
  return (
    <div
      key={`detail-form-input-${input.id}`}
      className={`col-span-12 sm:col-span-${input.cols}`}
    >
      <label
        htmlFor={input.id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {input.name || input.id}
      </label>
      {inputs[input.type]}
    </div>
  );
}
