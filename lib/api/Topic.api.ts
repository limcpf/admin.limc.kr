import { router } from "next/client";
import { request } from "@/lib/api/request";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";

const getTopicDetail = (id: string) =>
  request(API_URLS.priTopic + "/id", METHODS.GET);
request(url, method, payload)
  .then((data) => data.json())
  .then((data) => {
    alert("전송 성공!");
    router.push(`/topic/${data.id}`);
  })
  .catch((e: Error) => {
    console.log(e);
    alert("전송 실패");
  });
