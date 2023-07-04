import { UpdateDetailFormOption } from "@/types/form";
import Topic from "@/lib/classes/domain/topic/Topic.class";
import { API_URLS } from "@/lib/constants/API";

const TopicUpdateFormOption: UpdateDetailFormOption<Topic> = {
  pk: "id",
  apiHref: API_URLS.priTopic,
};

export default TopicUpdateFormOption;
