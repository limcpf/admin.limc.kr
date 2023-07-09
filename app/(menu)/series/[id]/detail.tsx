"use client";
import Button from "@/components/btn/Button";
import React, {FormEventHandler, useState} from "react";
import {SeriesDetail} from "@/lib/classes/domain/series/SeriesDetail.class";
import {getTopic} from "@/lib/api/Topic.client";
import {getJsonObjectFromForm} from "@/lib/util/Submit.util";
import {patchSeries} from "@/lib/api/Series.client";
import {useRouter} from "next/navigation";
import {SelectInputProp} from "@/components/form/input/interface/SelectInput.interface";
import {getSiteClient} from "@/lib/api/Site.client";
import {TextInputProp} from "@/components/form/input/interface/TextInput.interface";
import InputFactory from "@/components/form/input/Input";

export default function SeriesDetailPage({series}:{
  series: SeriesDetail
}) {
  const [site, setSite] = useState<string>(series.site)
  const router = useRouter();
  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const obj = getJsonObjectFromForm(evt);
    patchSeries(obj)
    .then((d) => {
      alert("수정 완료");
      router.push(`/series/${d.id}`);
    })
    .catch((e: Error) => {
      alert(e.message);
    });
  };

  const siteSelect: SelectInputProp<SeriesDetail> = {
    id: "site",
    cols: 6,
    value: series.site,
    type: "SELECT",
    isChild: false,
    option: {
      required: true,
    },
  };

  const topicSelect: SelectInputProp<SeriesDetail> = {
    id: "topic",
    cols: 6,
    value: series.topic,
    type: "SELECT",
    isChild: true,
    option: {
      required: true,
    },
  };

  const idInput: TextInputProp<SeriesDetail> = {
    id: "id",
    cols: 6,
    value: series.id,
    type: "TEXT",
    option: {
      disabled: true,
      required: true
    },
  };

  const postCntInput: TextInputProp<SeriesDetail> = {
    id: "postCnt",
    cols: 6,
    value: String(series.postCnt||"0"),
    type: "TEXT",
    option: {
      disabled: true
    },
  };
  const titleInput: TextInputProp<SeriesDetail> = {
    id: "title",
    cols: 12,
    value: series.title,
    type: "TEXT",
    option: {
      required: true,
      minLength: 3,
      maxLength: 255,
    },
  };

  const createdAtInput: TextInputProp<SeriesDetail> = {
    id: "createdAt",
    cols: 6,
    value: series.createdAt,
    type: "TEXT",
    option: {
      disabled: true
    },
  };

  const updatedAtInput: TextInputProp<SeriesDetail> = {
    id: "updatedAt",
    cols: 6,
    value: series.updatedAt,
    type: "TEXT",
    option: {
      disabled: true
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
            시리즈 조회 / 수정
          </div>
        </div>
        <hr className="w-11/12 sm:w-4/5 pb-2" />
        {/** BODY */}
        <form
            onSubmit={onSubmit}
            className="grid grid-cols-12 gap-2 w-full p-3 pt-1 sm:w-4/5 sm:col-span-4"
        >
          <InputFactory
              input={siteSelect}
              setFunction={setSite}
              dataFunction={getSiteClient}
          />
          <InputFactory
              input={topicSelect}
              dataFunction={getTopic}
              parentValue={site}
          />
          <InputFactory input={idInput} />
          <InputFactory input={postCntInput} />
          <InputFactory input={titleInput} />
          <InputFactory input={createdAtInput} />
          <InputFactory input={updatedAtInput} />
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
  )
}