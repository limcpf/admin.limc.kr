import { UpdateDetailFormOption } from "@/types/form";
import { API_URLS } from "@/lib/constants/API";
import { SiteDetail } from "@/lib/classes/domain/site/SiteDetail.class";

const SiteDetailFormOption: UpdateDetailFormOption<SiteDetail> = {
  pk: "name",
  apiHref: API_URLS.priSite,
};

export default SiteDetailFormOption;
