import BaseTime from "../../BaseTime.class";
import Site from "../site/Site.class";

class Topic extends BaseTime {
  id: string;
  site: string;
  name: string;

  constructor(
    id: string,
    site: Site,
    name: string,
    createdAt: string,
    updatedAt: string,
  ) {
    super(createdAt, updatedAt);
    this.id = id;
    this.site = site.name;
    this.name = name;
  }
}

export default Topic;
