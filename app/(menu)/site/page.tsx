import "./site.css";
import React from "react";
import { METHODS } from "@/lib/constants/InputType";
import { API_URLS } from "@/lib/constants/API";
import { Page } from "@/types/form";
import { request } from "@/lib/api/request";
import Site from "@/lib/classes/domain/site/Site.class";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import SitePageWrapper from "./pageWrapper";

async function getData(page: string) {
  const res = await request(API_URLS.priSite + `?page=${page}`, METHODS.GET);
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  return res.json();
}

export default async function SitePage({
  searchParams,
}: {
  searchParams: Params;
}) {
  const data = (await getData(searchParams.page || "1")) as Page<Site>;

  return <SitePageWrapper data={data} />;
}
