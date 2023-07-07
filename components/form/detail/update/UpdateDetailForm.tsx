"use client";
import React, { FormEventHandler } from "react";
import DetailForm from "@/components/form/detail/DetailForm";
import {
  DetailFormInput,
  UpdateDetailFormOption,
  UpdateDetailFormProp,
} from "@/types/form";
import UpdateDetailFormHeader from "@/components/form/detail/update/UpdateDetailFormHeader";

export default function UpdateDetailForm<T>({
  data,
  inputs,
  option,
  onSubmit,
}: {
  data: T;
  inputs: DetailFormInput<T>[];
  option: UpdateDetailFormOption<T>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}) {
  const form: UpdateDetailFormProp<T> = {
    inputs: inputs,
    data: data,
    option: option,
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <UpdateDetailFormHeader option={form.option} />
      <hr className="w-11/12 sm:w-4/5 pb-2" />
      <DetailForm<T>
        onSubmit={onSubmit}
        data={form.data}
        inputs={form.inputs}
        selectData={form.option.selectData}
      />
    </div>
  );
}
