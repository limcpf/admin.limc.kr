import { SiteDetail } from "@/lib/classes/domain/site/SiteDetail.class";
import { DetailFormInput } from "@/types/form";

const detailFormInputs: DetailFormInput<SiteDetail>[] = [
  {
    id: "name",
    name: "이름",
    col: 12,
    type: "TEXT",
    option: {
      disabled: true,
    },
  },
  {
    id: "topicCnt",
    name: "토픽 개수",
    col: 4,
    type: "NUMBER",
    option: {
      disabled: true,
    },
  },
  {
    id: "seriesCnt",
    name: "시리즈 개수",
    col: 4,
    type: "NUMBER",
    option: {
      disabled: true,
    },
  },
  {
    id: "postCnt",
    name: "글 개수",
    col: 4,
    type: "NUMBER",
    option: {
      disabled: true,
    },
  },
  {
    id: "createdAt",
    name: "생성일시",
    col: 12,
    type: "DATE",
    option: {
      disabled: true,
    },
  },
  {
    id: "updatedAt",
    name: "수정일시",
    col: 12,
    type: "DATE",
    option: {
      disabled: true,
    },
  },
];

export default detailFormInputs;
