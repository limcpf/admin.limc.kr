import BaseTime from "@/lib/classes/BaseTime.class";

export class TopicDetail extends BaseTime {
  id: string;
  name: string;
  site: string;
  seriesCnt: number;
  postCnt: number;
  constructor(
    id: string,
    name: string,
    site: string,
    seriesCnt: number,
    postCnt: number,
    createdAt: string,
    updatedAt: string,
  ) {
    super(createdAt, updatedAt);
    this.id = id;
    this.name = name;
    this.site = site;
    this.seriesCnt = seriesCnt;
    this.postCnt = postCnt;
  }
}
