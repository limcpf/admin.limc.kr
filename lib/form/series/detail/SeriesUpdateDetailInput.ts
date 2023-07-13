import {SeriesDetail} from "@/lib/classes/domain/series/SeriesDetail.class";
import {SelectInputProp} from "@/components/form/input/interface/SelectInput.interface";
import {TextInputProp} from "@/components/form/input/interface/TextInput.interface";
import {NumberInputProp} from "@/components/form/input/interface/NumberInput.interface";

type Inputs<T> = SelectInputProp<T> | TextInputProp<T> | NumberInputProp<T>;
export const SeriesUpdateDetailInput: Inputs<SeriesDetail>[] = [
  {
    id: "id",
    cols: 6,
    value: "",
    type: "TEXT",
    option: {
      disabled: true,
      required: true,
    },
  },
  {
    id: "postCnt",
    name: "글 개수",
    cols: 6,
    value: "",
    type: "TEXT",
    option: {
      disabled: true,
    },
  },
  {
    id: "site",
    name: "사이트",
    cols: 6,
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
    cols: 6,
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
  {
    id: "createdAt",
    name:"생성일시",
    cols: 6,
    value: "",
    type: "DATE",
    option: {
      disabled: true,
    },
  },
  {
    id: "updatedAt",
    name: "수정일시",
    cols: 6,
    value: "",
    type: "DATE",
    option: {
      disabled: true,
    },
  },
];
