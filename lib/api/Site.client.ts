import { cacheRequest, response } from "@/lib/api/request";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";

export async function getSiteClient() {
  const res = await cacheRequest(API_URLS.priSite + "/list", METHODS.GET);
  return response(res);
}
