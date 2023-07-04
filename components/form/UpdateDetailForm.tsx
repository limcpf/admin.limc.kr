"use client";
import React from "react";
import Button from "@/components/btn/Button";
import DetailForm from "@/components/form/DetailForm";
import { request } from "@/lib/api/request";
import { METHODS } from "@/lib/constants/InputType";
import {
  AddDetailFormOption,
  AddDetailFormProp,
  DetailFormInput,
} from "@/types/form";
import { useRouter } from "next/navigation";
import PageWrapperHeader from "@/app/(menu)/site/[name]/pageWrapperHeader";

export default function AddDetailForm<T>({
  data,
  inputs,
  option,
}: {
  data: T;
  inputs: DetailFormInput<T>[];
  option: AddDetailFormOption<T>;
}) {
  const PK_VALUE = data[option.pk];

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

    payload[option.pk] = PK_VALUE;

    request(option.apiHref, METHODS.PATCH, payload)
      .then((data) => data.json())
      .then((data) => {
        alert("전송 성공!");
        router.refresh();
      })
      .catch((e: Error) => {
        console.log(e);
        alert("전송 실패");
      });
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <PageWrapperHeader option={form.option} />
      <hr className="w-11/12 sm:w-4/5 pb-2" />
      <DetailForm onSubmit={onSubmit} form={form}>
        <div className="col-span-full grid grid-cols-12 my-3">
          <Button
            isSubmit={true}
            className="col-start-6 col-end-8"
            text="수정"
            type="ROUNDED"
            onClick={() => {}}
          />
        </div>
      </DetailForm>
    </div>
  );
}
