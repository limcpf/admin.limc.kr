import {DetailFormInput} from "@/types/form";
import Series from "@/lib/classes/domain/series/Series.class";
import topicAddFormInputs from "@/lib/form/topic/detail/TopicAddFormInputs";

const seriesAddFormInputs: DetailFormInput<Series>[] = [
  {
    id: "topic",
    name: "topic",
    col: 12,
    type: "SELECT",
    option: {
      required: true,
      selectDataId: "topicList",
    },
  },
  {
    id: "title",
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
