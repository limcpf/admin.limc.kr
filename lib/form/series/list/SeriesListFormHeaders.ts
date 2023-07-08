import { ListFormHeaderProp } from "@/types/form";
import Series from "@/lib/classes/domain/series/Series.class";

const SeriesListFormHeaders: ListFormHeaderProp<Series>[] = [
  {
    name: "아이디",
    id: "id",
    col: 1,
    type: "TEXT",
    align: "center",
  },
  {
    name: "사이트",
    id: "site",
    col: 1,
    type: "TEXT",
    align: "center",
    option: {
      href: "/site/",
      hrefId: "site",
    },
  },
  {
    name: "주제",
    id: "topicName",
    col: 3,
    type: "TEXT",
    align: "center",
    option: {
      href: "/topic/",
      hrefId: "topic",
    },
  },
  {
    name: "제목",
    id: "title",
    col: 6,
    type: "TEXT",
    align: "center",
  },
  {
    name: "생성일시",
    id: "createdAt",
    col: 1,
    type: "DATE",
    align: "center",
  },
];

export default SeriesListFormHeaders;
