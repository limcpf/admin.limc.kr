"use client";
import React from "react";
import { request } from "@/lib/api/request";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";
import { TopicDetail } from "@/lib/classes/domain/topic/TopicDetail.class";

type Props = {
  params: {
    name: string;
  };
};

async function getData(id: string) {
  const res = await request(API_URLS.priTopic + id, METHODS.GET);
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
}

export default async function TopicDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const id = params.id;
  if (!id) return <div className="max-h-full">옳지 않은 id 값입니다.</div>;

  const data = (await getData(id)) as TopicDetail;

  return <DetailPageWrapper></DetailPageWrapper>;
}
