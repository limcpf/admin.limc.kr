"use client";

import Button from "@/components/btn/Button";
import React, {FormEventHandler, useState} from "react";
import {useRouter} from "next/navigation";
import {getJsonObjectFromForm} from "@/lib/util/Submit.util";
import {getSiteSelect} from "@/lib/api/Site.client";
import {getTopicSelect} from "@/lib/api/Topic.client";
import {SelectInputProp} from "@/components/form/input/interface/SelectInput.interface";
import InputFactory from "@/components/form/input/InputFactory";
import {PostAddDetailInput} from "@/lib/form/post/detail/PostAddDetailInput";
import PostDetail from "@/lib/classes/domain/post/PostDetail.class";
import {addPost} from "@/lib/api/Post.client";
import {getSeriesSelect} from "@/lib/api/Series.client";

export default function AddPostPage({}: {}) {
  const [site, setSite] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const router = useRouter();
  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const obj = getJsonObjectFromForm(evt);
    addPost(obj)
      .then((d) => {
        alert("생성 완료");
        router.push(`/post/${d.id}`);
      })
      .catch((e: Error) => {
        alert(e.message);
      });
  };

  const addInputs = PostAddDetailInput;
  const siteInput = addInputs.find(
    (i) => i.id === "site",
  ) as SelectInputProp<PostDetail>;

  const topicInput = addInputs.find(
    (i) => i.id === "topic",
  ) as SelectInputProp<PostDetail>;

  const seriesInput = addInputs.find(
      (i) => i.id === "series",
  ) as SelectInputProp<PostDetail>;

  if (siteInput && topicInput) {
    siteInput.setFunction = setSite;
    siteInput.dataFunction = getSiteSelect;

    topicInput.setFunction = setTopic;
    topicInput.dataFunction = getTopicSelect;
    topicInput.parentValue = site;

    seriesInput.dataFunction = getSeriesSelect;
    seriesInput.parentValue = topic;
  }

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
          시리즈 생성
        </div>
      </div>
      <hr className="w-11/12 sm:w-4/5 pb-2" />
      {/** BODY */}
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-12 gap-2 w-full p-3 pt-1 sm:w-4/5 sm:col-span-4"
      >
        {addInputs.map((i, idx) => <InputFactory key={`input-post-${idx}`} input={i} />)}
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
