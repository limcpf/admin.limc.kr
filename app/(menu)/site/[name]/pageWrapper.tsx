"use client";
import React, { FormEvent } from "react";
import DetailForm from "@/components/form/DetailForm";
import { DetailFormProp } from "@/types/form";
import { useRouter } from "next/navigation";
import RoundButton from "@/components/btn/RoundButton";

type Props = {
  form: DetailFormProp;
};

const onSubmit = (evt: FormEvent) => {
  evt.preventDefault();
};

export default function pageWrapper({ form }: Props) {
  const router = useRouter();

  const bUrl = form.option?.backBtnUrl;

  const backBtnOnClick = () => {
    if (bUrl) router.push(bUrl);
    else router.back();
  };

  return (
    <>
      <div className="w-full grid grid-cols-3 p-3 text-black">
        <div className="flex justify-start items-end col-span-1">
          <RoundButton onClick={() => backBtnOnClick()} text="뒤로가기" />
        </div>
        <div className="flex items-center justify-center col-span-1 text-center">
          {form.option?.formName || "상세정보"}
        </div>
      </div>
      <hr className="w-4/5 pb-2" />
      <DetailForm form={form} onSubmit={onSubmit} />
    </>
  );
}
