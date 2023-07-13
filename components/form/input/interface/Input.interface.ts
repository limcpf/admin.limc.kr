export const INPUT_TYPE = {
  SELECT: "SELECT",
  TEXT: "TEXT",
  NUMBER: "NUMBER",
  DATE: "DATE",
  TEXTAREA: "TEXTAREA"
} as const;

export type INPUT_TYPE = typeof INPUT_TYPE[keyof typeof INPUT_TYPE];

export interface InputOption<T> {
  disabled?: boolean;
  visible?: boolean;
  required?: boolean;
}

export interface Input<T> {
  id: keyof T & string;
  name?: string;
  cols: number;
  value: string;
  type: INPUT_TYPE;
  option?: InputOption<T>;
}
