import { SeriesDetail } from "@/lib/classes/domain/series/SeriesDetail.class";
import { SelectInputProp } from "@/components/form/input/interface/SelectInput.interface";
import { TextInputProp } from "@/components/form/input/interface/TextInput.interface";
import { NumberInputProp } from "@/components/form/input/interface/NumberInput.interface";

type Inputs<T> = SelectInputProp<T> | TextInputProp<T> | NumberInputProp<T>;
export const SeriesAddDetailInput: Inputs<SeriesDetail>[] = [
  {
    id: "site",
    name: "사이트",
    cols: 12,
    value: "",
    type: "SELECT",
    isChild: false,
    option: {
      required: true,
    },
  },
  {
    id: "topic",
    name: "주제",
    cols: 12,
    value: "",
    type: "SELECT",
    isChild: true,
    option: {
      required: true,
    },
  },
  {
    id: "title",
    name: "제목",
    cols: 12,
    value: "",
    type: "TEXT",
    option: {
      required: true,
      minLength: 3,
      maxLength: 255,
    },
  },
];
