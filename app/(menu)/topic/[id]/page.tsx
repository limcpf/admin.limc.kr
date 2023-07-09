import React from "react";
import { request } from "@/lib/api/request";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";
import { TopicDetail } from "@/lib/classes/domain/topic/TopicDetail.class";
import UpdateDetailPageWrapper from "@/components/form/detail/update/UpdateDetailPageWrapper";
import TopicUpdateFormInputs from "@/lib/form/topic/detail/TopicUpdateFormInputs";
import TopicUpdateFormOption from "@/lib/form/topic/detail/TopicUpdateFormOption";
import { UpdateDetailFormOption } from "@/types/form";
import { patchTopic } from "@/lib/api/Topic.server";
import { getSiteSelectData } from "@/lib/api/Site.server";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const res = await request(API_URLS.priTopic + `/${id}`, METHODS.GET);
  if (!res.ok) throw new Error(`${res.statusText}`);
  return res.json();
}

export default async function TopicDetailPage({ params }: Props) {
  const id = params.id;
  if (!id) return <div className="max-h-full">옳지 않은 id 값입니다.</div>;

  const data = (await getData(id)) as TopicDetail;
  const option: UpdateDetailFormOption<TopicDetail> = {
    ...TopicUpdateFormOption,
    selectData: {
      siteList: await getSiteSelectData(),
    },
  };

  return (
    <UpdateDetailPageWrapper<TopicDetail>
      data={data}
      inputs={TopicUpdateFormInputs}
      option={option}
      func={patchTopic}
    />
  );
}
