"use client";
import Button from "@/components/btn/Button";
import React, { FormEventHandler, useState } from "react";
import { SeriesDetail } from "@/lib/classes/domain/series/SeriesDetail.class";
import { getTopic } from "@/lib/api/Topic.client";
import { getJsonObjectFromForm } from "@/lib/util/Submit.util";
import { patchSeries } from "@/lib/api/Series.client";
import { useRouter } from "next/navigation";
import { SelectInputProp } from "@/components/form/input/interface/SelectInput.interface";
import { getSiteClient } from "@/lib/api/Site.client";
import InputFactory from "@/components/form/input/Input";
import { SeriesUpdateDetailInput } from "@/lib/form/series/detail/SeriesUpdateDetailInput";

export default function SeriesDetailPage({
  series,
}: {
  series: SeriesDetail;
}) {
  const [site, setSite] = useState<string>(series.site);
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

  const detailInputs = SeriesUpdateDetailInput;

  detailInputs.forEach((i) => {
    i.value = series[i.id].toString();
    if (i.type === "SELECT") {
      const select = i as SelectInputProp<SeriesDetail>;
      switch (i.id) {
        case "site":
          select.setFunction = setSite;
          select.dataFunction = getSiteClient;
          break;
        case "topic":
          select.dataFunction = getTopic;
          select.parentValue = site;
      }
    }
  });

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
        {detailInputs.map((i) => (
          <InputFactory input={i} />
        ))}
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
