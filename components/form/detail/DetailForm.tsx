"use client";

import { DetailFormInput, DetailSelectData } from "@/types/form";
import React, { FormEventHandler } from "react";
import DetailLabel from "./DetailLabel";
import DetailInput from "./DetailInput";
import Button from "@/components/btn/Button";

type Props = {
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

export default function DetailForm<T>({
  data,
  inputs,
  onSubmit,
  selectData,
}: Props & {
  data: T;
  inputs: DetailFormInput<T>[];
  selectData?: { [key: string]: DetailSelectData[] };
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-12 gap-2 w-full p-3 pt-1 sm:w-4/5 sm:col-span-4"
    >
      {inputs.map((input: DetailFormInput<T>, idx: number) => {
        return (
          <div
            key={`detail-form-input-${idx}`}
            className={`col-span-12 sm:col-span-${input.col}`}
          >
            <DetailLabel<T> id={input.id} name={input.name} />
            <DetailInput<T>
              type={input.type}
              value={data[input.id]}
              id={input.id}
              option={input.option}
              selectData={selectData}
            />
          </div>
        );
      })}
      {onSubmit && (
        <div className="col-span-full grid grid-cols-12 my-3">
          <Button
            isSubmit={true}
            className="col-start-6 col-end-8"
            text="수정"
            type="ROUNDED"
            onClick={() => {}}
          />
        </div>
      )}
    </form>
  );
}
