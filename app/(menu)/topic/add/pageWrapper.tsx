"use client";

import React from "react";
import Button from "@/components/btn/Button";
import DetailForm from "@/components/form/DetailForm";
import Topic from "@/lib/classes/domain/topic/Topic.class";
import topicAddFormInputs from "@/lib/form/detail/TopicAddFormInputs";
import PageWrapperHeader from "../../site/[name]/pageWrapperHeader";
import {useRouter} from "next/navigation";
import {request} from "@/lib/api/request";
import {API_URLS} from "@/lib/constants/API";
import {METHODS} from "@/lib/constants/InputType";
import {DetailSelectData} from "@/types/form";

export default function TopicAddPageWrapper({
  selectList
}: {
  selectList: DetailSelectData[]
}) {
  const router = useRouter();

  const form = {
    inputs: topicAddFormInputs,
    data: new Topic("", "", ""),
    option: {
      formName: "주제 생성",
      selectData: {
        siteList: selectList.map((d) => { return {key:d.key, value:d.value} })
      }
    }
  };

    const onSubmit = (evt: any) => {
      evt.preventDefault();
      const target = evt.target;
      const payload: any = {};

      for (const t of target) {
        payload[t.id] = t.value;
      }

      console.log(`payload 전송 : ${JSON.stringify(payload)}`);

      request(API_URLS.priTopic, METHODS.POST, payload)
        .then((data) => data.json())
        .then((data) => {
          alert("전송 성공!");
          router.push(`/topic/${data.id}`);
        })
        .catch((e: Error) => {
          console.log(e);
          alert("전송 실패");
        });
    }

  return (
    <div className="flex flex-col w-full justify-center items-center">
        <PageWrapperHeader option={form.option} />
        <hr className="w-11/12 sm:w-4/5 pb-2" />
        <DetailForm onSubmit={onSubmit} form={form}>
          <div className="col-span-full grid grid-cols-12 my-3">
            <Button
              isSubmit={true}
              className="col-start-6 col-end-8"
              text="추가"
              type="ROUNDED"
              onClick={() => {}}
            />
          </div>
        </DetailForm>
    </div>);
}
