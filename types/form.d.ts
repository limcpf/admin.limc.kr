import Detail from "@/lib/classes/Detail.class";

/** ListForm */
export type ListFormHeaderOption<T> = {
  disabled?: boolean;
  href?: string;
  hrefId?: keyof T;
};

export type ListFormHeader<T> = {
  name: string;
  id: keyof T;
  col: number;
  type: "TEXT" | "NUMBER" | "DATE";
  align: "left" | "center" | "right";
  option?: ListFormHeaderOption<T>;
};

export type ListFormProp<T> = {
  header: ListFormHeader[];
  list: List<T>;
};

export type Page<T> = {
  content: T[];
  pageSize: number;
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
export type DetailFormInputOption = {
  disabled?: boolean;
  min?: number;
  max?: number;
  required?: boolean;
  regExp?: RegExp;
};

export type DetailFormInput<T> = {
  name: string;
  id: keyof T;
  col: number;
  type: "TEXT";
  option?: DetailFormInputOption;
};

export type DetailFormOption = {
  backBtnUrl?: string;
  formName?: string;
};

export type DetailFormProp<T> = {
  data: T;
  inputs: DetailFormInput<T>[];
  option?: DetailFormOption;
};
