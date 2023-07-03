import BaseTime from "../../BaseTime.class";

class Topic extends BaseTime {
  id: string;
  site: string;
  name: string;
  constructor(
    id: string,
    site: string,
    name: string,
    createdAt?: string,
    updatedAt?: string,
  ) {
    super(createdAt, updatedAt);
    this.id = id;
    this.site = site;
    this.name = name;
  }
}

export default Topic;
