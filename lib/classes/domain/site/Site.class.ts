import BaseTime from "@/lib/classes/BaseTime.class";

class Site extends BaseTime {
  name: string;

  constructor(name:string, createdAt:string, updatedAt:string) {
    super(createdAt, updatedAt);
    this.name = name;
  }
}

export default Site;