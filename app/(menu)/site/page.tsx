import "./site.css";
import React from "react";
import { METHODS } from "@/lib/constants/InputType";
import { API_URLS } from "@/lib/constants/API";
import { List } from "@/lib/classes/form/List.class";
import ListForm from "@/components/form/ListForm";
import SiteListFormHeaders from "@/lib/form/list/SiteListFormHeaders";
import { ListFormProp, Page } from "@/types/form";
import { request } from "@/lib/api/request";
import Site from "@/lib/classes/domain/site/Site.class";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

async function getData(page:string) {
  const res = await request(API_URLS.priSite + `?page=${page}`, METHODS.GET);
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  return res.json();
}

export default async function SitePage({searchParams} : {
  searchParams: Params
}) {
  const data = await getData(searchParams.page || "1") as Page<Site>;

  let list: List<Site> = new List<Site>(data);
  
  let form: ListFormProp<Site> = {
    header: SiteListFormHeaders,
    list: list,
  };

  return <ListForm form={form} />;
}
