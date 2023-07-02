import React from "react";
import { ListFormHeader } from "@/types/form";
import Link from "next/link";

export default function ListBody<T>({
  headers,
  data,
  index,
}: {
  headers: ListFormHeader<T>[];
  data: T;
  index: number;
}) {
  const koDtf = new Intl.DateTimeFormat("ko", {
    dateStyle: "long",
    timeStyle: "medium",
  });

  const divideRowBg = (i: number) =>
    i % 2 === 1
      ? "bg-gray-100 hover:bg-gray-300"
      : "bg-white hover:bg-gray-200";

  const getHrefComponent = (href: string, id: keyof T, t: T, text: string) => {
    let link = `${href}${t[id]}`;

    const idx = href.indexOf(":");
    if (idx !== -1) {
      const pre = href.substring(0, idx);
      const suf = href.substring(idx + `${t[id]}`.length + 1, href.length);
      link = `${pre}${t[id]}${suf}`;
    }

    return (
      <Link className="font-medium text-blue-600 hover:underline" href={link}>
        {text}
      </Link>
    );
  };

  const getListFormBody = (h: ListFormHeader<T>, t: T) => {
    const content =
      h.type === "DATE" ? koDtf.format(new Date(String(t[h.id]))) : t[h.id];
    const href = h.option?.href;

    if (h.option && href) {
      let { disabled } = h.option;

      const hrefId = h.option.hrefId || h.id;
      if (!disabled && href)
        return getHrefComponent(href, hrefId, t, `${content}`);
    }

    return <span>{`${content}`}</span>;
  };

  return (
    <div
      className={`col-span-full grid grid-cols-12 py-3 ${divideRowBg(index)}`}
    >
      {headers.map((h: ListFormHeader<T>, i2: number) => {
        const key = `cell-body-${index}-${i2}`;
        const cn = `
                    text-${h.align}
                    col-span-${h.col}
                    ${h.align === "left" && "pl-1"} 
                    ${h.type === "DATE" && "text-xs text-gray-500"}
                `;

        return (
          <div key={key} className={cn}>
            {getListFormBody(h, data)}
          </div>
        );
      })}
    </div>
  );
}
