class BaseTime {
  createdAt: string;
  updatedAt: string;

  constructor(createdAt: string, updatedAt: string) {
    const koDtf = new Intl.DateTimeFormat("ko", {
      dateStyle: "long",
      timeStyle: "medium",
    });
    try {
      this.createdAt = koDtf.format(new Date(createdAt));
      this.updatedAt = koDtf.format(new Date(updatedAt));
    } catch (e) {
      this.createdAt = koDtf.format(new Date());
      this.updatedAt = koDtf.format(new Date());
    }
  }
}

export default BaseTime;
