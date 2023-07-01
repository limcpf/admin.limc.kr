import React from "react";
import { CellFormProp, CellFormHeader } from "@/types/cellForm";
import Link from "next/link";

type Props = {
  form: CellFormProp;
};

export default function CellForm({ form }: Props) {
  const koDtf = new Intl.DateTimeFormat("ko", {
    dateStyle: "long",
    timeStyle: "medium",
  });
  const headers = form.header;
  const data = form.data;

  const getHrefComponent = (
    href: string,
    id: string = "",
    d: Object,
    text: string,
  ) => {
    const idx = href.indexOf(":");
    if (idx !== -1) {
      const pre = href.substring(0, idx);
      const suf = href.substring(idx + id.length + 1, href.length);
      return (
        <Link
          className="font-medium text-blue-600 hover:underline"
          href={`${pre}${d[id]}${suf}`}
        >
          {text}
        </Link>
      );
    } else {
      return (
        <Link
          className="font-medium text-blue-600 hover:underline"
          href={`${href}${d[id]}`}
        >
          {text}
        </Link>
      );
    }
  };

  const getCellFormBody = (h: CellFormHeader, d: Object) => {
    let text = d[h.id];
    if (h.type === "DATE") text = koDtf.format(new Date(text));
    if (h.option) {
      const { disabled, href, hrefId } = h.option;

      return !disabled && href ? (
        getHrefComponent(href, hrefId, d, text)
      ) : (
        <span>{text}</span>
      );
    } else {
      return <span>{text}</span>;
    }
  };

  return (
    <>
      <div className="w-full text-black grid grid-cols-12 gap-2 px-3 py-2 pb-0">
        {headers.map((h: CellFormHeader, i: number) => {
          return (
            <div
              key={`cell-from-header-${i}`}
              className={`cell-form-header text-center col-span-${h.col} font-light text-xs border-b-2 pb-1`}
            >
              {h.name}
            </div>
          );
        })}
      </div>
      <div className="w-full text-black grid grid-cols-12 gap-x-2 px-3 pb-0 ">
        {data.map((d: Object, i: number) => {
          const bodyCn = `
            col-span-full 
            grid 
            grid-cols-12 
            py-2
            ${(i % 2 === 1)
                  ? "bg-gray-100 hover:bg-gray-300"
                  : "bg-white hover:bg-gray-200"
            } 
          `;
          return (
            <div
              className={bodyCn}
            >
              {headers.map((h: CellFormHeader, i2: number) => {
                const key = `cell-body-${i}-${i2}`;
                const cn = `
                    text-${h.align}
                    col-span-${h.col}
                    ${h.align === "left" && "pl-1"} 
                    ${h.type === "DATE" && "text-xs text-gray-500"}
                `;

                return (
                  <div
                    key={key}
                    className={cn}
                  >
                    {getCellFormBody(h, d, i2)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
