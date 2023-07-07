"use client";

import {
  DetailFormInput,
  JsonObject,
  UpdateDetailFormOption,
  UpdateDetailFormProp,
} from "@/types/form";
import UpdateDetailForm from "@/components/form/detail/update/UpdateDetailForm";
import { FormEventHandler } from "react";
import { getJsonObjectFromForm } from "@/lib/util/Submit.util";
import { useRouter } from "next/navigation";

export default function UpdateDetailPageWrapper<T>({
  data,
  inputs,
  option,
  func,
}: {
  data: T;
  inputs: DetailFormInput<T>[];
  option: UpdateDetailFormOption<T>;
  func?: (payload: JsonObject) => Promise<any>;
}) {
  const router = useRouter();
  const form: UpdateDetailFormProp<T> = {
    data: data,
    inputs: inputs,
    option: option,
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    if (!func) return;

    const obj = getJsonObjectFromForm(evt);

    func(obj)
      .then(() => {
        alert("수정 완료");
        router.refresh();
      })
      .catch((e: Error) => {
        alert(e.message);
      });
  };

  return (
    <UpdateDetailForm<T>
      data={form.data}
      inputs={form.inputs}
      option={form.option}
      onSubmit={onSubmit}
    />
  );
}
