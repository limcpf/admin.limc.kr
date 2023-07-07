import BaseTime from "../../BaseTime.class";

class Series extends BaseTime {
  id: string;
  site: string;
  topic: string;
  name: string;
  constructor(
    id: string,
    site: string,
    topic: string,
    name: string,
    createdAt?: string,
    updatedAt?: string,
  ) {
    super(createdAt, updatedAt);
    this.id = id;
    this.site = site;
    this.name = name;
    this.topic = topic;
  }
}

export default Series;
