import React from "react";
import {request} from "@/lib/api/request";
import {API_URLS} from "@/lib/constants/API";
import {METHODS} from "@/lib/constants/InputType";
import SeriesDetailPage from "@/app/(menu)/series/[id]/detail";
import {SeriesDetail} from "@/lib/classes/domain/series/SeriesDetail.class";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const res = await request(API_URLS.priSeries + `/${id}`, METHODS.GET);
  if (!res.ok) throw new Error(`${res.statusText}`);
  return res.json();
}

export default async function SeriesDetailPageWrapper({ params }: Props) {
  const id = params.id;
  if (!id) return <div className="max-h-full">옳지 않은 id 값입니다.</div>;

  const data = (await getData(id)) as SeriesDetail;
  return <SeriesDetailPage series={data} />
}
