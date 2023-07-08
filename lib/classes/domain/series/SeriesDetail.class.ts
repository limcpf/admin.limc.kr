import BaseTime from "@/lib/classes/BaseTime.class";

export class SeriesDetail extends BaseTime {
  id: string;
  title: string;
  site: string;
  topic: string;
  postCnt: number;
  constructor(
    id: string,
    title: string,
    site: string,
    topic: string,
    postCnt: number,
    createdAt: string,
    updatedAt: string,
  ) {
    super(createdAt, updatedAt);
    this.id = id;
    this.title = title;
    this.site = site;
    this.topic = topic;
    this.postCnt = postCnt;
  }
}
