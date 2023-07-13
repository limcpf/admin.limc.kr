import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Post from "@/lib/classes/domain/post/Post.class";
import { Page } from "@/types/form";
import { getPostList } from "@/lib/api/Post.server";
import PostListHeaders from "@/lib/form/post/list/PostListHeaders";
import PostListOption from "@/lib/form/post/list/PostListOption";
import ListPageWrapper from "@/components/form/list/page/ListPageWrapper";

export default async function RootPost({
  searchParams,
}: {
  searchParams: Params;
}) {
  const data = (await getPostList(searchParams.page || "1")) as Page<Post>;
  data.content.forEach((p) => {
    p.isPublished = p.isPublished ? "발행" : "미발행";
  });
  return (
    <ListPageWrapper
      data={data}
      header={PostListHeaders}
      option={PostListOption}
    />
  );
}
