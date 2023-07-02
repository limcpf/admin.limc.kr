"use client";

import React from "react";
import { ListFormProp, ListFormHeader } from "@/types/form";
import ListHeader from "@/components/form/ListHeader";
import ListBody from "@/components/form/ListBody";
import { List } from "@/lib/classes/form/List.class";
import ListFooter from "./ListFooter";

export default function ListForm<T>({
  form,
}: {
  form: ListFormProp<T>;
}) {
  const headers = form.header;
  const list: List<T> = form.list;

  const contents: T[] = list.contents;
  const classes = "w-full grid grid-cols-12 text-black gap-2  pb-0";
  return (
    <>
      {/* Header */}
      <div className={classes}>
        {headers.map((h: ListFormHeader<T>, i: number) => (
          <ListHeader key={`lh-${i}`} index={i} col={h.col} text={h.name} />
        ))}
      </div>
      {/* Body */}
      <div className={`${classes} gap-y-0`}>
        {contents.map((c: T, i: number) => (
          <ListBody key={`lb-${i}`} headers={headers} data={c} index={i} />
        ))}
      </div>
      {/* Footer */}
      <div className={classes}>
        <ListFooter list={list} />
      </div>
    </>
  );
}
