import Site from "@/lib/classes/domain/site/Site.class";
import { AddDetailFormOption } from "@/types/form";
import { API_URLS } from "@/lib/constants/API";

const SiteAddFormOption: AddDetailFormOption<Site> = {
  pk: "name",
  apiHref: API_URLS.priSite,
  successHref: "/site/",
};
export default SiteAddFormOption;
