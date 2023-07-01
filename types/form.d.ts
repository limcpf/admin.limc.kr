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


/** DetailForm */
export type DetailFormInputOption = {
  disabled?: boolean;
};

export type DetailFormInput = {
  name: string;
  id: string;
  col: number;
  type: "TEXT";
  option?: DetailFormInputOption;
};

export type DetailFormOption = {
  backBtnUrl?: string;
  formName?: string;
};

export type DetailFormProp = {
  inputs: DetailFormInput[];
  data: Detail | null;
  option?: DetailFormOption;
};

