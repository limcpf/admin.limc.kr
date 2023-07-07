import BaseTime from "@/lib/classes/BaseTime.class";

export class SeriesDetail extends BaseTime {
  id: string;
  name: string;
  site: string;
  topic: string;
  postCnt: number;
  constructor(
    id: string,
    name: string,
    site: string,
    topic: string,
    postCnt: number,
    createdAt: string,
    updatedAt: string,
  ) {
    super(createdAt, updatedAt);
    this.id = id;
    this.name = name;
    this.site = site;
    this.topic = topic;
    this.postCnt = postCnt;
  }
}
