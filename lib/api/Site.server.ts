import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";
import { JsonObject } from "@/types/form";
import { request, response } from "@/lib/api/request";

export async function addSite(payload: JsonObject) {
  "use server";
  const res = await request(API_URLS.priSite, METHODS.POST, payload);
  return response(res);
}
export async function getSiteSelectData() {
  "use server";
  const res = await request(API_URLS.priSite + "/list", METHODS.GET);
  return response(res);
}
