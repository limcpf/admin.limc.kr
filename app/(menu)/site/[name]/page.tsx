import React from "react";
import _ from "lodash";
import PageWrapper from "./pageWrapper";
import {API_URLS} from "@/lib/constants/API";
import {METHODS} from "@/lib/constants/InputType";
import {request} from "@/lib/api/request";
import DetailForm from "@/lib/form/detail/SiteDetailForm";
import {DetailFormProp} from "@/types/form";
import {SiteDetail} from "@/lib/classes/domain/site/SiteDetail.class";


type Props = {
  params: {
    name: string;
  };
};

async function getData(name: string) {
  const res = await request(`${API_URLS.priSite}/${name}`, METHODS.GET);

  if (!res.ok) throw new Error("로드 실패")

  return res.json();
}


export default async function SiteDetailPage({ params }: Props) {
  if (!params.name) return <span>이름이 존재하지 않음</span>;

  const siteDetail = await getData(params.name);

  const form:DetailFormProp = _.cloneDeep(DetailForm);

  form.data = siteDetail
      ? new SiteDetail(
          siteDetail.name,
          siteDetail.topicCnt,
          siteDetail.seriesCnt,
          siteDetail.seriesCnt,
          siteDetail.createdAt,
          siteDetail.updatedAt,
      )
      : null;

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <PageWrapper form={form} />
    </div>
  );
}
