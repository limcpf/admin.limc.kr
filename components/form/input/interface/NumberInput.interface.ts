import {
  Input,
  InputOption,
} from "@/components/form/input/interface/Input.interface";

export interface NumberInputOption<T> extends InputOption<T> {
  min?: number;
  max?: number;
}

export interface NumberInput<T> extends Input<T> {
  option?: NumberInputOption<T>;
}
