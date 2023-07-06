import { request } from "@/lib/api/request";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";

export const patchTopic = (payload: Object) =>
  request(API_URLS.priTopic, METHODS.PATCH, payload)
    .then((data) => data.json())
    .then(() => {
      alert("전송 성공");
    })
    .catch((e: Error) => {
      console.log(e);
      alert("전송 실패");
    });
export const getSiteSelectData = async () => {
  const res = await request(API_URLS.priSite + "/list", METHODS.GET);
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
};
