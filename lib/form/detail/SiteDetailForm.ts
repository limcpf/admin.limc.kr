import { DetailFormProp } from "@/types/form";

const detailForm: DetailFormProp = {
  inputs: [
    {
      name: "이름",
      id: "name",
      col: 12,
      type: "TEXT",
      option: {
        disabled: true,
      },
    },
    {
      name: "토픽 개수",
      id: "topicCnt",
      col: 4,
      type: "TEXT",
      option: {
        disabled: true,
      },
    },
    {
      name: "시리즈 개수",
      id: "seriesCnt",
      col: 4,
      type: "TEXT",
      option: {
        disabled: true,
      },
    },
    {
      name: "글 개수",
      id: "postCnt",
      col: 4,
      type: "TEXT",
      option: {
        disabled: true,
      },
    },
    {
      name: "생성일시",
      id: "createdAt",
      col: 12,
      type: "TEXT",
      option: {
        disabled: true,
      },
    },
    {
      name: "수정일시",
      id: "updatedAt",
      col: 12,
      type: "TEXT",
      option: {
        disabled: true,
      },
    },
  ],
  data: {},
  option: {
    backBtnUrl: "/site",
  },
};

export default detailForm;
