import {request} from "@/lib/api/request";
import {API_URLS} from "@/lib/constants/API";
import {METHODS} from "@/lib/constants/InputType";
import {JsonObject} from "@/types/form";

export async function patchTopic(payload: JsonObject) {
  'use server';
  console.log(payload)
  const h = await request(API_URLS.priTopic, METHODS.PATCH, payload);
  const jsonData = await h.json();
  if(jsonData["errorCode"]) throw new Error(jsonData["message"]);
  return jsonData
}
export const getSiteSelectData = async () => {
  const res = await request(API_URLS.priSite + "/list", METHODS.GET);
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
};

// export const apiList:{[key:string]: (payload:Object) => Promise<void>} = {
//   "patchTopic" : patchTopic,
//   "getSiteSelectData" : getSiteSelectData
// }
//
// export type ApiListType = typeof apiList;
