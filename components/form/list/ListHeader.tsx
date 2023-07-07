import Button from "@/components/btn/Button";
import { ListFormOption } from "@/types/form";
import { useRouter } from "next/navigation";
import List from "@/lib/classes/form/List.class";
import React from "react";

export default function ListHeader<T>({
  list,
  option,
}: {
  list: List<T>;
  option: ListFormOption;
}) {
  const router = useRouter();
  return (
    <div className="w-full flex justify-between mb-3">
      <div className="text-xs text-gray-300 flex items-center">
        {list.pageSize}개 기준 {list.curPage}번째 페이지, 총{" "}
        {list.totalElements}개
      </div>
      <div>
        <Button onClick={() => router.refresh()} text="↺" type="ROUNDED" />
        <Button
          onClick={() => router.push(option.addPageHref)}
          text="+"
          type="ROUNDED"
        />
      </div>
    </div>
  );
}
