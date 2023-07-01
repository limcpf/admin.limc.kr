import "./site.css";
import React from "react";
import { METHODS } from "@/lib/constants/InputType";
import { API_URLS } from "@/lib/constants/API";
import { List } from "@/lib/classes/form/List.class";
import ListForm from "@/components/form/ListForm";
import SiteListFormHeaders from "@/lib/form/list/SiteListFormHeaders";
import { ListFormProp } from "@/types/form";
import { request } from "@/lib/api/request";
import Site from "@/lib/classes/domain/site/Site.class";

async function getData() {
  const res = await request(API_URLS.priSite, METHODS.GET);
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  return res.json();
}

export default async function SitePage() {
  const data = await getData();

  let list: List<Site> = new List<Site>(data.content as Site[], 0, 0, 0, 0);

  let form: ListFormProp<Site> = {
    header: SiteListFormHeaders,
    list: list,
  };

  return <ListForm form={form} />;
}
