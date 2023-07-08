"use client";

import React from "react";
import {ListFormHeaderProp, ListFormProp} from "@/types/form";
import ListFormHeader from "@/components/form/list/ListFormHeader";
import ListBody from "@/components/form/list/ListBody";
import {List} from "@/lib/classes/form/List.class";
import ListFormFooter from "./ListFormFooter";
import ListHeader from "@/components/form/list/ListHeader";

export default function ListForm<T>({
  form,
}: {
  form: ListFormProp<T>;
}) {
  const headers = form.header;
  const list: List<T> = form.list;

  const contents: T[] = list.contents;
  const classes = "w-full grid grid-cols-12 text-black gap-2 pb-0";
  return (
    <>
      <ListHeader list={list} option={form.option} />
      {/* Header */}
      <div className={classes} >
        {headers.map((h: ListFormHeaderProp<T>, i: number) => (
          <ListFormHeader key={`lh-${i}`} index={i} col={h.col} text={h.name} />
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
        <ListFormFooter list={list} />
      </div>
    </>
  );
}
