import { SelectInputProp } from "@/components/form/input/interface/SelectInput.interface";
import { TextInputProp } from "@/components/form/input/interface/TextInput.interface";
import { NumberInputProp } from "@/components/form/input/interface/NumberInput.interface";
import { TextAreaInput } from "@/components/form/input/interface/TextAreaInput.interface";

/** ListForm */
export type ListFormHeaderOption<T> = {
  disabled?: boolean;
  href?: string;
  hrefId?: keyof T;
  dynamicValue?: Function<string>;
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
export type DetailFormInputType = "TEXT" | "SELECT" | "NUMBER" | "DATE";

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

export type AddDetailFormOption<T> = DetailFormOption & {
  pk: keyof T;
  apiHref: string;
  successHref: string;
};
export type AddDetailFormProp<T> = Omit<DetailFormProp<T>, "option"> & {
  option: AddDetailFormOption<T>;
};

export type UpdateDetailFormOption<T> = Omit<
  AddDetailFormOption<T>,
  "successHref"
>;

export type UpdateDetailFormProp<T> = Omit<DetailFormProp<T>, "option"> & {
  option: UpdateDetailFormOption<T>;
};

export type DetailFormProp<T> = {
  data: T;
  inputs: DetailFormInput<T>[];
  option?: DetailFormOption;
};

/** etc */
export interface JsonObject {
  [key: string]: string;
}

export type Inputs<T> =
  | SelectInputProp<T>
  | TextInputProp<T>
  | NumberInputProp<T>
  | TextAreaInput<T>;
