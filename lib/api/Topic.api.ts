import {request, response} from "@/lib/api/request";
import {API_URLS} from "@/lib/constants/API";
import {METHODS} from "@/lib/constants/InputType";
import {JsonObject} from "@/types/form";

export async function patchTopic(payload: JsonObject) {
  "use server";
  const res = await request(API_URLS.priTopic, METHODS.PATCH, payload);
  return await response(res);
}
export async function addTopic(payload: JsonObject) {
  "use server";
  const res = await request(API_URLS.priTopic, METHODS.POST, payload);
  return await response(res);
}
