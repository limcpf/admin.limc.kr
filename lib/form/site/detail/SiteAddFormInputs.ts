import Site from "@/lib/classes/domain/site/Site.class";
import { DetailFormInput } from "@/types/form";

const siteAddFormInputs: DetailFormInput<Site>[] = [
  {
    id: "name",
    name: "이름",
    col: 12,
    type: "TEXT",
    option: {
      min: 1,
      max: 15,
      required: true,
    },
  },
];

export default siteAddFormInputs;
