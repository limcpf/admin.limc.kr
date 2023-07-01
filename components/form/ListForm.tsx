import React from "react";
import { ListFormProp, ListFormHeader } from "@/types/form";
import ListHeader from "@/components/form/ListHeader";
import ListBody from "@/components/form/ListBody";
import {List} from "@/lib/classes/form/List.class";

export default function ListForm<T>({ form }: {
  form: ListFormProp<T>
}) {
  const headers = form.header;
  const list: List<T> = form.list;

  const contents: T[] = list.contents;
  return (
    <>
      {/* Header */}
      <div className="grid grid-cols-12 w-full gap-2 px-3 py-2 pb-0 text-black">
        {headers.map(
            (h: ListFormHeader<T>, i: number) => <ListHeader index={i} col={h.col} text={h.name} />
        )}
      </div>
      {/* Body */}
      <div className="w-full text-black grid grid-cols-12 gap-x-2 px-3 pb-0 ">
        {contents.map((c: T, i: number) => <ListBody headers={headers} data={c} index={i} />)}
      </div>
    </>
  );
}
