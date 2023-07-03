import { request } from "@/lib/api/request";
import Topic from "@/lib/classes/domain/topic/Topic.class";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";
import { Page } from "@/types/form";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import ListPageWrapper from "@/components/form/ListPageWrapper";
import TopicListFormHeaders from "@/lib/form/list/TopicListFormHeaders";
import TopicListFormOption from "@/lib/form/list/TopicListFormOption";

async function getData(page: string) {
  const res = await request(API_URLS.priTopic + `?page=${page}`, METHODS.GET);
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

export default async function RootTopic({
  searchParams,
}: {
  searchParams: Params;
}) {
  const data = (await getData(searchParams.page || "1")) as Page<Topic>;

  return (
    <ListPageWrapper
      data={data}
      header={TopicListFormHeaders}
      option={TopicListFormOption}
    />
  );
}
