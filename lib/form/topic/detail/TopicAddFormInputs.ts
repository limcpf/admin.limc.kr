import Topic from "@/lib/classes/domain/topic/Topic.class";
import { DetailFormInput } from "@/types/form";

const topicAddFormInputs: DetailFormInput<Topic>[] = [
  {
    id: "site",
    name: "사이트",
    col: 12,
    type: "SELECT",
    option: {
      required: true,
      selectDataId: "siteList",
    },
  },
  {
    id: "name",
    name: "이름",
    col: 12,
    type: "TEXT",
    option: {
      min: 1,
      max: 255,
      required: true,
    },
  },
];

export default topicAddFormInputs;
