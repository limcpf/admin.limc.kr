"use client";
import React, {FormEventHandler} from "react";
import DetailForm from "@/components/form/detail/DetailForm";
import {AddDetailFormOption, AddDetailFormProp, DetailFormInput, JsonObject,} from "@/types/form";
import {useRouter} from "next/navigation";
import AddDetailPageWrapper from "@/components/form/detail/add/AddDetailPageWrapper";
import {getJsonObjectFromForm} from "@/lib/util/Submit.util";

export default function AddDetailForm<T>({
  data,
  inputs,
  option,
  func
}: {
  data: T;
  inputs: DetailFormInput<T>[];
  option: AddDetailFormOption<T>;
  func: (payload: JsonObject) => Promise<any>;
}) {
  const router = useRouter();

  const form: AddDetailFormProp<T> = {
    inputs: inputs,
    data: data,
    option: option,
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    if (!func) return;
    const obj = getJsonObjectFromForm(evt);
    func(obj)
      .then((d) => {
        alert("생성 완료");
        router.push(option.successHref + "/" + d[option.pk]);
      })
      .catch((e: Error) => {
        alert(e.message);
      });
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <AddDetailPageWrapper option={form.option} />
      <hr className="w-11/12 sm:w-4/5 pb-2" />
      <DetailForm
        onSubmit={onSubmit}
        data={form.data}
        inputs={form.inputs}
        selectData={form.option.selectData}
      />
    </div>
  );
}
