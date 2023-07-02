import Topic from "@/lib/classes/domain/topic/Topic.class";
import { ListFormHeader } from "@/types/form";

const TopicListFormheaders: ListFormHeader<Topic>[] = [
  {
    name: "아이디",
    id: "id",
    col: 1,
    type: "TEXT",
    align: "center",
  },
  {
    name: "사이트",
    id: "id",
    col: 2,
    type: "TEXT",
    align: "center",
    option: {
      href: "/site/",
      hrefId: "site",
    },
  },
  {
    name: "이름",
    id: "name",
    col: 6,
    type: "TEXT",
    align: "center",
    option: {
      href: "/topic/",
      hrefId: "id",
    },
  },
  {
    name: "생성일시",
    id: "createdAt",
    col: 3,
    type: "DATE",
    align: "center",
  },
];

export default TopicListFormheaders;
