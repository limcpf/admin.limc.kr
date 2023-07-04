"use client";

import {
  DetailFormInput,
  UpdateDetailFormOption,
  UpdateDetailFormProp,
} from "@/types/form";
import DetailForm from "@/components/form/DetailForm";
import { FormEvent } from "react";

const onSubmit = (evt: FormEvent) => {
  evt.preventDefault();
};

export default function DetailPageWrapper<T>({
  data,
  inputs,
  option,
}: {
  data: T;
  inputs: DetailFormInput<T>[];
  option: UpdateDetailFormOption<T>;
}) {
  const form: UpdateDetailFormProp<T> = {
    data: data,
    inputs: inputs,
    option: option,
  };

  return <DetailForm form={form} onSubmit={onSubmit} />;
}
