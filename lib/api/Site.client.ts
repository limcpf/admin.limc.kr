import { request, response } from "@/lib/api/request";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";

export async function getSiteSelect() {
  const res = await request(API_URLS.priSite + "/list", METHODS.GET);
  return response(res);
}
