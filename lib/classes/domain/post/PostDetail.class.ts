import BaseTime from "@/lib/classes/BaseTime.class";

export default class PostDetail extends BaseTime {
  id: string;
  site: string;
  topic: string;
  series?: string;
  title: string;
  content: string;

  constructor(
      id: string,
      site: string,
      topic: string,
      title: string,
      content: string,
      createdAt?: string,
      updatedAt?: string,
      series?: string,
  ) {
    super(createdAt, updatedAt);
    this.id = id;
    this.site = site;
    this.topic = topic;
    this.series = series;
    this.title = title;
    this.content = content;
  }

  hasSeries() {
    return !!this.series
  }
}