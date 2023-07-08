import {request, response} from "@/lib/api/request";
import {API_URLS} from "@/lib/constants/API";
import {METHODS} from "@/lib/constants/InputType";

export async function getSeriesList(page: string) {
  "use server";
  const res = await request(`${API_URLS.priSeries}?page=${page}`, METHODS.GET);
  return response(res);
}
