class DateUtil {
  private static instance: DateUtil;
  private koDtf = new Intl.DateTimeFormat("ko", {
    dateStyle: "short",
    timeStyle: "short",
  });

  private constructor() {}

  public static getInstance() {
    return this.instance || (this.instance = new DateUtil());
  }

  public date2Kr(str: string) {
    return this.koDtf.format(new Date(str));
  }
}

export default DateUtil;
