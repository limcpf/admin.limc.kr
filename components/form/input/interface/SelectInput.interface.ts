import {
  Input,
  InputOption,
} from "@/components/form/input/interface/Input.interface";

export interface SelectDataList {
  key: string;
  value: string;
}
export interface SelectInputOption<T> extends InputOption<T> {
  parentValue?: string;
}

export interface SelectInputProp<T> extends Input<T> {
  isChild: boolean;
  option?: SelectInputOption<T>;
}
