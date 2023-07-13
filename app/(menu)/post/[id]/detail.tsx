"use client";
import Button from "@/components/btn/Button";
import React, {FormEventHandler, useState} from "react";
import {getTopicSelect} from "@/lib/api/Topic.client";
import {getJsonObjectFromForm} from "@/lib/util/Submit.util";
import {useRouter} from "next/navigation";
import {SelectInputProp} from "@/components/form/input/interface/SelectInput.interface";
import {getSiteSelect} from "@/lib/api/Site.client";
import InputFactory from "@/components/form/input/InputFactory";
import PostDetail from "@/lib/classes/domain/post/PostDetail.class";
import {PostUpdateDetailInput} from "@/lib/form/post/detail/PostUpdateDetailInput";
import {getSeriesSelect} from "@/lib/api/Series.client";
import {patchPost} from "@/lib/api/Post.client";
import {Inputs} from "@/types/form";
import {SeriesDetail} from "@/lib/classes/domain/series/SeriesDetail.class";

export default function PostDetailPage({
  post,
}: {
  post: PostDetail;
}) {
  const [site, setSite] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const router = useRouter();
  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const obj = getJsonObjectFromForm(evt);
    patchPost(obj)
    .then((d) => {
      alert("생성 완료");
      router.push(`/post/${d.id}`);
    })
    .catch((e: Error) => {
      alert(e.message);
    });
  };

  const detailInputs = PostUpdateDetailInput as Inputs<PostDetail>[];

  detailInputs.forEach((i: Inputs<PostDetail>) => {
    // @ts-ignore
    i.value = post[i.id].toString();
    if (i.type === "SELECT") {
      const select = i as SelectInputProp<SeriesDetail>;
      switch (i.id) {
        case "site":
          select.setFunction = setSite;
          select.dataFunction = getSiteSelect;
          break;
        case "topic":
          console.log("z");
          select.setFunction = setTopic;
          select.dataFunction = getTopicSelect;
          select.parentValue = site;
          break;
        case "series":
          console.log("z2");
          select.dataFunction = getSeriesSelect;
          select.parentValue = topic;

      }
    }
  });


  return (
    <div className="flex items-center justify-center flex-col">
      {/** Header */}
      <div className="w-full grid grid-cols-3 p-3 text-black sm:w-4/5 sm:px-1">
        <div className="flex justify-start items-end col-span-1">
          <Button
            onClick={() => router.push("/post")}
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
        {detailInputs.map((i, idx) => (
          <InputFactory key={`detail-input-${idx}`} input={i} />
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
