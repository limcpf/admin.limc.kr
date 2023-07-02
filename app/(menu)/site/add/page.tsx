"use client";
import Button from "@/components/btn/Button";
import DetailForm from "@/components/form/DetailForm";
import {frontRequest, request} from "@/lib/api/request";
import Site from "@/lib/classes/domain/site/Site.class";
import {API_URLS} from "@/lib/constants/API";
import {METHODS} from "@/lib/constants/InputType";
import siteAddFormInputs from "@/lib/form/detail/SiteAddFormInputs";
import {DetailFormProp} from "@/types/form";
import {useRouter} from "next/navigation";
import React, {FormEvent} from "react";
import PageWrapperHeader from "../[name]/pageWrapperHeader";

export default function SiteAddPage() {
  const router = useRouter();

  const form:DetailFormProp<Site> = {
    inputs: siteAddFormInputs,
    data: new Site("","",""),
    option: {
      formName: "사이트 생성"
    }
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const target = evt.target;

    const payload:any = {};

    for(const t of target) {
      payload[t.id] = t.value;
    }

    console.log(`payload 전송 : ${payload}`);

    request(API_URLS.priSite, METHODS.POST, payload)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      alert("전송 성공!");
      router.push(`/site/${data.name}`);
    })
    .catch((e: Error) => {
      console.log(e);
      alert("전송 실패");
    })
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <PageWrapperHeader option={form.option} /> 
      <hr className="w-11/12 sm:w-4/5 pb-2" />
      <DetailForm onSubmit={onSubmit} form={form}>
        <div className="col-span-full grid grid-cols-12 my-3" >
          <Button isSubmit={true} className="col-start-6 col-end-8" text="추가" type="ROUNDED" onClick={() => {}}/>
        </div>
      </DetailForm>
    </div>
  );
}
