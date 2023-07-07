import { DetailFormInput } from "@/types/form";
import { TopicDetail } from "@/lib/classes/domain/topic/TopicDetail.class";

const TopicUpdateFormInputs: DetailFormInput<TopicDetail>[] = [
  {
    id: "id",
    name: "ID",
    col: 6,
    type: "TEXT",
  },
  {
    id: "site",
    name: "사이트",
    col: 6,
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
  {
    id: "seriesCnt",
    name: "시리즈 개수",
    col: 6,
    type: "NUMBER",
    option: {
      disabled: true,
    },
  },
  {
    id: "postCnt",
    name: "글 개수",
    col: 6,
    type: "NUMBER",
    option: {
      disabled: true,
    },
  },
  {
    id: "createdAt",
    name: "생성일시",
    col: 6,
    type: "DATE",
    option: {
      disabled: true,
    },
  },
  {
    id: "updatedAt",
    name: "수정일시",
    col: 6,
    type: "DATE",
    option: {
      disabled: true,
    },
  },
];

export default TopicUpdateFormInputs;
