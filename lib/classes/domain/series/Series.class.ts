import BaseTime from "../../BaseTime.class";

class Series extends BaseTime {
  id: string;
  site: string;
  topic: string;
  topicName: string;
  title: string;
  constructor(
    id: string,
    site: string,
    topic: string,
    topicName: string,
    title: string,
    createdAt?: string,
    updatedAt?: string,
  ) {
    super(createdAt, updatedAt);
    this.id = id;
    this.site = site;
    this.title = title;
    this.topic = topic;
    this.topicName = topicName;
  }
}

export default Series;
