export class List<T> {
  contents: T[];
  pageSize: number;
  curPage: number;
  totalPages: number;
  totalElements: number;

  constructor(
    contents: T[],
    pageSize: number,
    curPage: number,
    totalPages: number,
    totalElements: number,
  ) {
    this.contents = contents;
    this.pageSize = pageSize;
    this.curPage = curPage;
    this.totalPages = totalPages;
    this.totalElements = totalElements;
  }
}
