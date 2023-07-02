import { Page } from "@/types/form";

export class List<T> {
  contents: T[];
  pageSize: number;
  curPage: number;
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;

  constructor(page: Page<T>) {
    this.contents = page.content;
    this.pageSize = page.pageable.pageSize;
    this.curPage = page.pageable.pageNumber + 1;
    this.totalPages = page.totalPages;
    this.totalElements = page.totalElements;
    this.first = page.first;
    this.last = page.last;
  }
}
export default List;
