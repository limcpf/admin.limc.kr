export class List<T> {
  contents: T[];
  pageSize: number;
  curPage: number;
  totalPages: number;
  totalElements: number;

  constructor(contents:T[], pageSize:number, curPage:number, totalPages:number, totalElements:number) {
    this.contents = contents;
    this.pageSize = pageSize;
    this.curPage = curPage;
    this.totalPages = totalPages
    this.totalElements = totalElements;
  }
}

// "content":[
//   {
//     "content": [
//       {"id": 1, "username": "User 0", "address": "Korea", "age": 0},
//       // 중간 생략
//       {"id": 5, "username": "User 4", "address": "Korea", "age": 4}
//     ],
//     "pageable": {
//       "sort": {
//         "sorted": false, // 정렬 상태
//         "unsorted": true,
//         "empty": true
//       },
//       "pageSize": 5, // 한 페이지에서 나타내는 원소의 수 (게시글 수)
//       "pageNumber": 0, // 페이지 번호 (0번 부터 시작)
//       "offset": 0, // 해당 페이지에 첫 번째 원소의 수
//       "paged": true,
//       "unpaged": false
//     },
//     "totalPages": 20, // 페이지로 제공되는 총 페이지 수
//     "totalElements": 100, // 모든 페이지에 존재하는 총 원소 수
//     "last": false,
//     "number": 0,
//     "sort": {
//       "sorted": false,
//       "unsorted": true,
//       "empty": true
//     },
//     "size": 5,
//     "numberOfElements": 5,
//     "first": true,
//     "empty": false
//   }