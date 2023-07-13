import { request, response } from "@/lib/api/request";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";

export async function getTopicSelect(key?: string) {
  if (!key) return;
  const res = await request(API_URLS.priTopic + "/list/" + key, METHODS.GET);
  return response(res);
}
