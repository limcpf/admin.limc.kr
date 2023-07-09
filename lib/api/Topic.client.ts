import {cacheRequest, response} from "@/lib/api/request";
import {API_URLS} from "@/lib/constants/API";
import {METHODS} from "@/lib/constants/InputType";

export async function getTopic(key?: string) {
  if (!key) return;
  const res = await cacheRequest(
      API_URLS.priTopic + "/list/" + key,
      METHODS.GET,
  );
  return response(res);
}
