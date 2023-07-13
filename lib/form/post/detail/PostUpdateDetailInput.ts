import {Inputs} from "@/types/form";
import PostDetail from "@/lib/classes/domain/post/PostDetail.class";

export const PostUpdateDetailInput: Inputs<PostDetail>[] = [
  {
    id: "site",
    name: "사이트",
    cols: 6,
    value: "",
    type: "SELECT",
    isChild: false,
    option: {
      required: true,
    },
  },
  {
    id: "topic",
    name: "주제",
    cols: 6,
    value: "",
    type: "SELECT",
    isChild: true,
    option: {
      required: true,
    },
  },
  {
    id: "series",
    name: "시리즈",
    cols: 12,
    value: "",
    type: "SELECT",
    isChild: true,
    option: {
      required: false,
    },
  },
  {
    id: "id",
    cols: 1,
    value: "",
    type: "TEXT",
    option: {
      disabled: true,
      required: true,
    },
  },
  {
    id: "title",
    name: "제목",
    cols: 11,
    value: "",
    type: "TEXT",
    option: {
      required: true,
      minLength: 3,
      maxLength: 255,
    },
  },
  {
    id: "content",
    name: "내용",
    cols: 12,
    value: "",
    type: "TEXTAREA",
    option: {
      rows: 20,
      required: true
    }
  },
  {
    id: "createdAt",
    name:"생성일시",
    cols: 6,
    value: "",
    type: "DATE",
    option: {
      disabled: true,
    },
  },
  {
    id: "updatedAt",
    name: "수정일시",
    cols: 6,
    value: "",
    type: "DATE",
    option: {
      disabled: true,
    },
  },
];
