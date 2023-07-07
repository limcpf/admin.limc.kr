import { UpdateDetailFormOption } from "@/types/form";
import { API_URLS } from "@/lib/constants/API";
import { TopicDetail } from "@/lib/classes/domain/topic/TopicDetail.class";

const TopicUpdateFormOption: UpdateDetailFormOption<TopicDetail> = {
  pk: "id",
  apiHref: API_URLS.priTopic,
};

export default TopicUpdateFormOption;
