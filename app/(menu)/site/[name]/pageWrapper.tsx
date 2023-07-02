"use client";
import React, { FormEvent } from "react";
import DetailForm from "@/components/form/DetailForm";
import { DetailFormProp } from "@/types/form";
import Button from "@/components/btn/Button";
import { SiteDetail } from "@/lib/classes/domain/site/SiteDetail.class";
import detailFormInputs from "@/lib/form/detail/SiteDetailFormInputs";
import PageWrapperHeader from "./pageWrapperHeader";

type Props = {
  data: SiteDetail;
};

const onSubmit = (evt: FormEvent) => {
  evt.preventDefault();
};

export default function pageWrapper({ data }: Props) {
  const { name, topicCnt, seriesCnt, postCnt, createdAt, updatedAt } = data;

  /** 날짜 부분 포맷화를 위해 객체 재생성 */
  const siteDetail = new SiteDetail(
    name,
    topicCnt,
    seriesCnt,
    postCnt,
    createdAt,
    updatedAt,
  );

  const form: DetailFormProp<SiteDetail> = {
    inputs: detailFormInputs,
    data: siteDetail,
    option: {
      backBtnUrl: "/site",
    },
  };

  return (
    <>
      <PageWrapperHeader option={form.option} />
      <hr className="w-11/12 sm:w-4/5 pb-2" />
      <DetailForm<SiteDetail> form={form} onSubmit={onSubmit} />
      <hr className="w-11/12 sm:w-4/5 pb-2" />
      <Button
        onClick={() => {}}
        text="사이트에 등록된 토픽 보기"
        type="ROUNDED"
      />
    </>
  );
}
