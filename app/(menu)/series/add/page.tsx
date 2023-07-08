"use client";

import Button from "@/components/btn/Button";
import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { getJsonObjectFromForm } from "@/lib/util/Submit.util";
import { JsonObject } from "@/types/form";
import { cacheRequest, request, response } from "@/lib/api/request";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";
import SelectInput from "@/components/form/input/SelectInput";
import { SelectInputProp } from "@/components/form/input/interface/SelectInput.interface";
import TextInput from "@/components/form/input/TextInput";
import { TextInputProp } from "@/components/form/input/interface/TextInput.interface";
import { SeriesDetail } from "@/lib/classes/domain/series/SeriesDetail.class";

async function addSeries(payload: JsonObject) {
  const res = await request(`${API_URLS.priSeries}`, METHODS.POST, payload);
  return response(res);
}

async function getSite() {
  const res = await cacheRequest(API_URLS.priSite + "/list", METHODS.GET);
  return response(res);
}

async function getTopic(key?: string) {
  if (!key) return;
  const res = await cacheRequest(
    API_URLS.priTopic + "/list/" + key,
    METHODS.GET,
  );
  return response(res);
}

export default function AddSeriesPage({}: {}) {
  const [site, setSite] = useState<string>("");
  const router = useRouter();
  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const obj = getJsonObjectFromForm(evt);
    console.log(obj);
    addSeries(obj)
      .then((d) => {
        alert("생성 완료");
        router.push(`/series/${d.id}`);
      })
      .catch((e: Error) => {
        alert(e.message);
      });
  };

  const siteSelect: SelectInputProp<SeriesDetail> = {
    id: "site",
    cols: 12,
    value: "",
    type: "SELECT",
    isChild: false,
    option: {
      required: true,
    },
  };

  const topicSelect: SelectInputProp<SeriesDetail> = {
    id: "topic",
    cols: 12,
    value: "",
    type: "SELECT",
    isChild: true,
    option: {
      required: true,
    },
  };

  const textInput: TextInputProp<SeriesDetail> = {
    id: "title",
    cols: 12,
    value: "",
    type: "TEXT",
    option: {
      required: true,
      minLength: 3,
      maxLength: 255,
    },
  };
  return (
    <div className="flex items-center justify-center flex-col">
      {/** Header */}
      <div className="w-full grid grid-cols-3 p-3 text-black sm:w-4/5 sm:px-1">
        <div className="flex justify-start items-end col-span-1">
          <Button
            onClick={() => router.push("/series")}
            text="<"
            type="ROUNDED"
          />
        </div>
        <div className="flex items-center justify-center col-span-1 text-center">
          시리즈 생성
        </div>
      </div>
      <hr className="w-11/12 sm:w-4/5 pb-2" />
      {/** BODY */}
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-12 gap-2 w-full p-3 pt-1 sm:w-4/5 sm:col-span-4"
      >
        <div
          key={`detail-form-input-site`}
          className={`col-span-12 sm:col-span-12`}
        >
          <label
            htmlFor="site"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            사이트
          </label>
          <SelectInput
            input={siteSelect}
            setFunction={setSite}
            dataFunction={getSite}
          />
        </div>
        <div
          key={`detail-form-input-topic`}
          className={`col-span-12 sm:col-span-12`}
        >
          <label
            htmlFor="topic"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            주제
          </label>
          <SelectInput
            input={topicSelect}
            dataFunction={getTopic}
            parentValue={site}
          />
        </div>
        <div
          key={`detail-form-input-name`}
          className={`col-span-12 sm:col-span-12`}
        >
          <label
            htmlFor="topic"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            제목
          </label>
          <TextInput input={textInput} />
        </div>
        <div className="col-span-full grid grid-cols-12 my-3">
          <Button
            isSubmit={true}
            className="col-start-6 col-end-8"
            text="저장"
            type="ROUNDED"
            onClick={() => {}}
          />
        </div>
      </form>
    </div>
  );
}
