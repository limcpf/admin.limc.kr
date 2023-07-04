"use client";

import { DetailFormInput, UpdateDetailFormProp } from "@/types/form";
import { FormEventHandler, ReactNode } from "react";
import DetailLabel from "./DetailLabel";
import DetailInput from "./DetailInput";

type Props = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children?: ReactNode;
};

export default function DetailForm<T>({
  form,
  onSubmit,
  children,
}: Props & {
  form: UpdateDetailFormProp<T>;
}) {
  const inputs = form.inputs;
  const detail: T = form.data;

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
              value={detail[input.id]}
              id={input.id}
              option={input.option}
              selectData={form.option?.selectData}
            />
          </div>
        );
      })}
      {children ? children : <></>}
    </form>
  );
}
