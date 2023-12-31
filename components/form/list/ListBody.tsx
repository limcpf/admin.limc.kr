import React from "react";
import { ListFormHeaderProp } from "@/types/form";
import Link from "next/link";
import DateUtil from "@/lib/util/Date.util";

export default function ListBody<T>({
  headers,
  data,
  index,
}: {
  headers: ListFormHeaderProp<T>[];
  data: T;
  index: number;
}) {
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

  const getListFormBody = (h: ListFormHeaderProp<T>, t: T) => {
    let content: T[keyof T] | string = t[h.id];
    if (h.type === "DATE" && typeof content === "string") {
      content = DateUtil.getInstance().date2Kr(content);
    }
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
    <div className={`flex py-3 ${divideRowBg(index)}`}>
      {headers.map((h: ListFormHeaderProp<T>, i2: number) => {
        const width = h.col * 90;
        const key = `cell-body-${index}-${i2}`;
        const cn = `
                    text-${h.align}
                    ${h.align === "left" && "pl-1"} 
                    ${h.type === "DATE" && "text-xs text-gray-500"}
                    truncate
                `;
        const style = { width: `${width}px` };

        return (
          <div key={key} className={cn} style={style}>
            {getListFormBody(h, data)}
          </div>
        );
      })}
    </div>
  );
}
