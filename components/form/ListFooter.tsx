"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { List } from "@/lib/classes/form/List.class";
import { useRouter } from "next/navigation";

export default function ListFooter({
  list,
}: {
  list: List<any>;
}) {
  const [page, setPage] = useState(list.curPage);

  useEffect(() => {
    setPage(list.curPage);
  }, [list.curPage]);
  const router = useRouter();

  const su = (evt: any) => {
    evt.preventDefault();

    let curPage = String(list.curPage);

    const value = evt.target.page.value;

    if (value && value > 0 && value <= list.totalPages && curPage !== value) {
      router.push(`?page=${value}`, { locale: true });
    } else if (curPage === value) {
      alert("같은 페이지로는 이동할 수 없습니다.");
    }
  };

  const pageBtnClass = "flex items-center cursor-pointer text-xl";
  return (
    <>
      <div
        className={`${
          list.first && "hidden"
        } col-start-1 col-end-2 sm:col-start-4 sm:col-end-5 ${pageBtnClass} justify-end`}
        onClick={() => router.push(`?page=${list.curPage - 1}`)}
      >
        {`⬅`}
      </div>
      <div className="col-start-2 col-end-12  sm:col-start-5 sm:col-end-8 flex justify-center items-center my-3">
        <form onSubmit={su} className={"w-5/6 grid grid-cols-12"}>
          <div className="relative col-span-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg">
            <input
              id="page"
              name="page"
              type="number"
              className="block w-4/5 bg-gray-50 rounded-s-lg p-2.5 focus:outline-none"
              min={1}
              max={list.totalPages}
              defaultValue={page}
              required
            />
            <span className="text-gray-300 absolute right-0 bottom-0.5 font-medium rounded-lg text-sm px-4 py-2 ">{`/ ${list.totalPages}`}</span>
          </div>
          <button
            type="submit"
            className="col-span-4 border border-gray-300 bg-white p-2.5 text-sm  text-gray-700 rounded-e-lg hover:bg-gray-100 active:bg-gray-200 border-l-0"
          >
            이동
          </button>
        </form>
      </div>
      <div
        className={`${
          list.last && "hidden"
        } col-start-12 col-end-13 sm:col-start-8 sm:col-end-9 ${pageBtnClass} justify-start`}
        onClick={() => router.push(`?page=${list.curPage + 1}`)}
      >
        {`➡`}
      </div>
    </>
  );
}
