import React from "react";
import {request} from "@/lib/api/request";
import {API_URLS} from "@/lib/constants/API";
import {METHODS} from "@/lib/constants/InputType";
import PostDetail from "@/lib/classes/domain/post/PostDetail.class";
import PostDetailPage from "@/app/(menu)/post/[id]/detail";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const res = await request(API_URLS.priPost + `/${id}`, METHODS.GET);
  if (!res.ok) throw new Error(`${res.statusText}`);
  return res.json();
}

export default async function SeriesDetailPageWrapper({ params }: Props) {
  const id = params.id;
  if (!id) return <div className="max-h-full">옳지 않은 id 값입니다.</div>;

  const data = (await getData(id)) as PostDetail;
  return <PostDetailPage post={data} />;
}
