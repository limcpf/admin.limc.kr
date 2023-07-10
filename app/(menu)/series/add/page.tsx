"use client";

import Button from "@/components/btn/Button";
import React, {FormEventHandler, useState} from "react";
import {useRouter} from "next/navigation";
import {getJsonObjectFromForm} from "@/lib/util/Submit.util";
import {getSiteClient} from "@/lib/api/Site.client";
import {getTopic} from "@/lib/api/Topic.client";
import {addSeries} from "@/lib/api/Series.client";
import {SeriesAddDetailInput} from "@/lib/form/series/detail/SeriesAddDetailInput";
import {SelectInputProp} from "@/components/form/input/interface/SelectInput.interface";
import {SeriesDetail} from "@/lib/classes/domain/series/SeriesDetail.class";
import InputFactory from "@/components/form/input/Input";

export default function AddSeriesPage({}: {}) {
  const [site, setSite] = useState<string>("");
  const router = useRouter();
  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const obj = getJsonObjectFromForm(evt);
    addSeries(obj)
      .then((d) => {
        alert("생성 완료");
        router.push(`/series/${d.id}`);
      })
      .catch((e: Error) => {
        alert(e.message);
      });
  };

  const addInputs = SeriesAddDetailInput;
  const siteInput = addInputs.find((i) => i.id === "site") as SelectInputProp<SeriesDetail>;
  const topicInput = addInputs.find((i) => i.id === "topic") as SelectInputProp<SeriesDetail>;

  if(siteInput && topicInput) {
    siteInput.setFunction = setSite;
    siteInput.dataFunction = getSiteClient;
    topicInput.dataFunction = getTopic;
    topicInput.parentValue = site;
  }

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
        {addInputs.map(
            (i) => {
              return <InputFactory input={i} />
            }
        )}
      </form>
    </div>
  );
}
