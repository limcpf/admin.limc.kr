import BaseTime from "@/lib/classes/BaseTime.class";

export class SiteDetail extends BaseTime {
  name: string;
  topicCnt: number;
  seriesCnt: number;
  postCnt: number;
  constructor(
    name: string,
    topicCnt: number,
    seriesCnt: number,
    postCnt: number,
    createdAt: string,
    updatedAt: string,
  ) {
    super(createdAt, updatedAt);
    this.name = name;
    this.topicCnt = topicCnt;
    this.seriesCnt = seriesCnt;
    this.postCnt = postCnt;
  }
}
