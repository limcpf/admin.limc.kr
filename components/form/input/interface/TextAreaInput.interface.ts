import {
  Input,
  InputOption,
} from "@/components/form/input/interface/Input.interface";

export interface TextAreaInputOption<T> extends InputOption<T> {
  rows: number;
}

export interface TextAreaInputProp<T> extends Input<T> {
  option: TextAreaInputOption<T>;
}
