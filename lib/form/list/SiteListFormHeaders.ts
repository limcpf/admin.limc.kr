import Site from "@/lib/classes/domain/site/Site.class";
import { ListFormHeader } from "@/types/form";

const SiteListFormHeaders: ListFormHeader<Site>[] = [
  {
    name: "이름",
    id: "name",
    col: 6,
    type: "TEXT",
    align: "center",
    option: {
      href: "/site/",
      hrefId: "name",
    },
  },
  {
    name: "생성일시",
    id: "createdAt",
    col: 3,
    type: "DATE",
    align: "center",
  },
  {
    name: "수정일시",
    id: "updatedAt",
    col: 3,
    type: "DATE",
    align: "center",
  },
];

export default SiteListFormHeaders;
