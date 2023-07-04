import { request } from "@/lib/api/request";
import { METHOD } from "@/lib/constants/InputType";
import { router } from "next/client";

interface JsonObject {
  [key: string]: string;
}

export default function getOnSubmit(url: string, method: METHOD) {
  return (evt: FormDataEvent) => {
    evt.preventDefault();
    const payload: JsonObject = {};
    const formData = evt.formData;

    formData.forEach((k, v) => {
      payload[String(k)] = v;
    });

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
  };
}
