import {
  Input,
  InputOption,
} from "@/components/form/input/interface/Input.interface";

export interface TextInputOption<T> extends InputOption<T> {
  minLength?: number;
  maxLength?: number;
  regExp?: RegExp;
}

export interface TextInputProp<T> extends Input<T> {
  option?: TextInputOption<T>;
}
