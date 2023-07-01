import React from "react";
import _ from "lodash";
import PageWrapper from "./pageWrapper";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";
import { request } from "@/lib/api/request";
import { DetailFormInput, DetailFormProp } from "@/types/form";
import { SiteDetail } from "@/lib/classes/domain/site/SiteDetail.class";
import DetailFormInputs from "@/lib/form/detail/SiteDetailFormInputs";

type Props = {
  params: {
    name: string;
  };
};

async function getData(name: string) {
  const res = await request(`${API_URLS.priSite}/${name}`, METHODS.GET);

  if (!res.ok) throw new Error("로드 실패");

  return res.json();
}

export default async function SiteDetailPage({ params }: Props) {
  if (!params.name) return <span>이름이 존재하지 않음</span>;
  const {name, topicCnt, seriesCnt, postCnt, createdAt, updatedAt} = await getData(params.name) as SiteDetail;
  const siteDetail = new SiteDetail(name, topicCnt, seriesCnt, postCnt, createdAt, updatedAt);

  const inputs:DetailFormInput<SiteDetail>[] = DetailFormInputs;
  
  const form:DetailFormProp<SiteDetail> = {
    inputs: inputs,
    data: siteDetail,
    option: {
      backBtnUrl: "/site"
    }
  }

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <PageWrapper form={form} />
    </div>
  );
}
