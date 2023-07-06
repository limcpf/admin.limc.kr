"use client";
import React from "react";
import DetailForm from "@/components/form/detail/DetailForm";
import {request} from "@/lib/api/request";
import {METHODS} from "@/lib/constants/InputType";
import {AddDetailFormOption, AddDetailFormProp, DetailFormInput,} from "@/types/form";
import {useRouter} from "next/navigation";
import AddDetailPageWrapper from "@/components/form/detail/add/AddDetailPageWrapper";

export default function AddDetailForm<T>({
  data,
  inputs,
  option,
}: {
  data: T;
  inputs: DetailFormInput<T>[];
  option: AddDetailFormOption<T>;
}) {
  const router = useRouter();

  const form: AddDetailFormProp<T> = {
    inputs: inputs,
    data: data,
    option: option,
  };

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const target = evt.target;

    const payload: any = {};

    for (const t of target) {
      payload[t.id] = t.value;
    }

    request(option.apiHref, METHODS.POST, payload)
      .then((data) => data.json())
      .then((data) => {
        const obj = data as T;
        alert("전송 성공!");
        router.push(option.successHref + obj[option.pk]);
      })
      .catch((e: Error) => {
        console.log(e);
        alert("전송 실패");
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
