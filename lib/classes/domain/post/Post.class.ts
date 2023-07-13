import BaseTime from "@/lib/classes/BaseTime.class";

export default class Post extends BaseTime {
  id: string;
  site: string;
  topic: string;
  topicName: string;
  series?: string;
  seriesName?: string;
  title: string;
  isPublished: string;

  constructor(
    id: string,
    site: string,
    topic: string,
    topicName: string,
    title: string,
    isPublished: string,
    createdAt?: string,
    updatedAt?: string,
    series?: string,
    seriesName?: string,
  ) {
    super(createdAt, updatedAt);
    this.id = id;
    this.site = site;
    this.topic = topic;
    this.topicName = topicName;
    this.series = series;
    this.seriesName = seriesName;
    this.title = title;
    this.isPublished = isPublished;
  }

  hasSeries() {
    return !!this.series;
  }
}
