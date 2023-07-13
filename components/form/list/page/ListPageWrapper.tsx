"use client";

import List from "@/lib/classes/form/List.class";
import {
  ListFormHeaderProp,
  ListFormOption,
  ListFormProp,
  Page,
} from "@/types/form";
import ListForm from "@/components/form/list/ListForm";

export default function ListPageWrapper<T>({
  data,
  header,
  option,
}: {
  data: Page<T>;
  header: ListFormHeaderProp<T>[];
  option: ListFormOption;
}) {
  let list: List<T> = new List<T>(data);

  const form: ListFormProp<T> = {
    header: header,
    list: list,
    option: option,
  };

  return <ListForm form={form} />;
}
