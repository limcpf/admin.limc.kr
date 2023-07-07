import React from "react";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";
import { request } from "@/lib/api/request";
import { SiteDetail } from "@/lib/classes/domain/site/SiteDetail.class";
import UpdateDetailPageWrapper from "@/components/form/detail/update/UpdateDetailPageWrapper";
import SiteDetailFormInputs from "@/lib/form/site/detail/SiteDetailFormInputs";
import SiteDetailFormOption from "@/lib/form/site/detail/SiteDetailFormOption";

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
  const data = (await getData(params.name)) as SiteDetail;
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <UpdateDetailPageWrapper<SiteDetail>
        data={data}
        inputs={SiteDetailFormInputs}
        option={SiteDetailFormOption}
      />
    </div>
  );
}
