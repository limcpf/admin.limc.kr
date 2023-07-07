import { API_URLS } from "@/lib/constants/API";
import { AddDetailFormOption } from "@/types/form";
import AddDetailForm from "@/components/form/detail/add/AddDetailForm";
import Topic from "@/lib/classes/domain/topic/Topic.class";
import TopicAddFormInputs from "@/lib/form/topic/detail/TopicAddFormInputs";
import { getSiteSelectData } from "@/lib/api/Site.api";
import { addTopic } from "@/lib/api/Topic.api";

export default async function TopicAddPage() {
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
      func={addTopic}
    />
  );
}
