class BaseTime {
  createdAt: string = new Date().toString();
  updatedAt: string = new Date().toString();

  constructor(createdAt?: string, updatedAt?: string) {
    if(createdAt) this.createdAt = createdAt;
    if(updatedAt) this.updatedAt = updatedAt;
  }
}

export default BaseTime;
