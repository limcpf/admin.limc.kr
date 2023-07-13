import { ListFormHeaderProp } from "@/types/form";
import Post from "@/lib/classes/domain/post/Post.class";

const PostListHeaders: ListFormHeaderProp<Post>[] = [
  {
    name: "발행여부",
    id: "isPublished",
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
    col: 2,
    type: "TEXT",
    align: "center",
    option: {
      href: "/topic/",
      hrefId: "topic",
    },
  },
  {
    name: "시리즈",
    id: "seriesName",
    col: 2,
    type: "TEXT",
    align: "center",
    option: {
      href: "/series/",
      hrefId: "series",
    },
  },
  {
    name: "제목",
    id: "title",
    col: 4,
    type: "TEXT",
    align: "center",
    option: {
      href: "/post/",
      hrefId: "id",
    },
  },
  {
    name: "생성일시",
    id: "createdAt",
    col: 2,
    type: "DATE",
    align: "center",
  },
  {
    name: "수정일시",
    id: "updatedAt",
    col: 2,
    type: "DATE",
    align: "center",
  },
];

export default PostListHeaders;
