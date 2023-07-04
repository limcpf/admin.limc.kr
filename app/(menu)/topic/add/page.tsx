import { request } from "@/lib/api/request";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";
import { AddDetailFormOption, DetailSelectData } from "@/types/form";
import AddDetailForm from "@/components/form/AddDetailForm";
import Topic from "@/lib/classes/domain/topic/Topic.class";
import TopicAddFormInputs from "@/lib/form/detail/TopicAddFormInputs";

const getSiteSelectData = async () => {
  const res = await request(API_URLS.priSite + "/list", METHODS.GET);
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
};

export default async function TopicAddPage() {
  const selectList = (await getSiteSelectData()) as DetailSelectData[];
  const option: AddDetailFormOption<Topic> = {
    pk: "id",
    apiHref: API_URLS.priTopic,
    successHref: "/topic/",
    formName: "주제 생성",
    selectData: {
      siteList: await getSiteSelectData(),
    },
  };
  return (
    <AddDetailForm
      data={new Topic("", "", "", "", "")}
      inputs={TopicAddFormInputs}
      option={option}
    />
  );
}
