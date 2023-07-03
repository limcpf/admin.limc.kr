import { request } from "@/lib/api/request";
import { API_URLS } from "@/lib/constants/API";
import { METHODS } from "@/lib/constants/InputType";
import TopicAddPageWrapper from "./pageWrapper";
import { DetailSelectData } from "@/types/form";

const getSiteSelectData = async () => {
  const res = await request(API_URLS.priSite + "/list", METHODS.GET);
  if (!res.ok) throw new Error(`${res.status}`);
  return res.json();
};

export default async function TopicAddPage() {
  const selectList = (await getSiteSelectData()) as DetailSelectData[];
  return <TopicAddPageWrapper selectList={selectList} />;
}
