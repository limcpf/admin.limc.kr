"use client";
import React, { FormEvent } from "react";
import DetailForm from "@/components/form/DetailForm";
import { DetailFormProp } from "@/types/form";
import { useRouter } from "next/navigation";
import RoundButton from "@/components/btn/RoundButton";
import { SiteDetail } from "@/lib/classes/domain/site/SiteDetail.class";

type Props = {
  form: DetailFormProp<SiteDetail>;
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
      <div className="w-full grid grid-cols-3 p-3 text-black sm:w-4/5 sm:px-1">
        <div className="flex justify-start items-end col-span-1">
          <RoundButton onClick={() => backBtnOnClick()} text="<" />
        </div>
        <div className="flex items-center justify-center col-span-1 text-center">
          {form.option?.formName || "상세정보"}
        </div>
      </div>
      <hr className="w-11/12 sm:w-4/5 pb-2" />
      <DetailForm<SiteDetail> form={form} onSubmit={onSubmit} />
      <hr className="w-11/12 sm:w-4/5 pb-2" />
      <RoundButton onClick={() => {}} text="사이트에 등록된 토픽 보기" />
    </>
  );
}
