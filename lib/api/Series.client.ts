import { JsonObject } from "@/types/form";
import { request, response } from "@/lib/api/request";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";

export async function addSeries(payload: JsonObject) {
  const res = await request(`${API_URLS.priSeries}`, METHODS.POST, payload);
  return response(res);
}

export async function getSeriesDetail(id: string) {
  const res = await request(`${API_URLS.priSeries}/${id}`, METHODS.GET);
  return response(res);
}

export async function patchSeries(payload: JsonObject) {
  const res = await request(`${API_URLS.priSeries}`, METHODS.PATCH, payload);
  return response(res);
}
