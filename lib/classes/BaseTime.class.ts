class BaseTime {
  createdAt: string;
  updatedAt: string;

  constructor(createdAt: string, updatedAt: string) {
    const koDtf = new Intl.DateTimeFormat("ko", {
      dateStyle: "long",
      timeStyle: "medium",
    });

    this.createdAt = koDtf.format(new Date(createdAt));
    this.updatedAt = koDtf.format(new Date(updatedAt));
  }
}

export default BaseTime;
