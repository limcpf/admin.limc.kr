/** ListForm */
export type ListFormHeaderOption<T> = {
  disabled?: boolean;
  href?: string;
  hrefId?: keyof T;
};

export type ListFormHeaderProp<T> = {
  name: string;
  id: keyof T;
  col: number;
  type: "TEXT" | "NUMBER" | "DATE";
  align: "left" | "center" | "right";
  option?: ListFormHeaderOption<T>;
};

export type ListFormOption = {
  addPageHref: string;
};

export type ListFormProp<T> = {
  header: ListFormHeaderProp[];
  list: List<T>;
  option: ListFormOption;
};

export type Page<T> = {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
};

/** DetailForm */

export type DetailSelectData = {
  key: string;
  value: string;
};
export type DetailFormInputOption = {
  disabled?: boolean;
  min?: number;
  max?: number;
  required?: boolean;
  regExp?: RegExp;
  selectDataId?: string;
};
export type DetailFormInputType = "TEXT" | "SELECT" | "NUMBER";

export type DetailFormInput<T> = {
  name: string;
  id: keyof T;
  col: number;
  type: DetailFormInputType;
  option?: DetailFormInputOption;
};
export type DetailFormOption = {
  backBtnUrl?: string;
  formName?: string;
  selectData?: { [key: string]: DetailSelectData[] };
};

export type DetailFormProp<T> = {
  data: T;
  inputs: DetailFormInput<T>[];
  option?: DetailFormOption;
};
