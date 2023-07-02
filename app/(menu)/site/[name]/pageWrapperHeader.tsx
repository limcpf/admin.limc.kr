"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { DetailFormOption } from "@/types/form";
import RoundButton from "@/components/btn/RoundButton";

export default function PageWrapperHeader({
  option,
}: {
  option?: DetailFormOption;
}) {
  const router = useRouter();

  const backBtnOnClick = (url: string | undefined) => {
    url ? router.push(url) : router.back();
  };

  const url = option?.backBtnUrl || "";
  const forName = option?.formName || "상세정보";

  return (
    <div className="w-full grid grid-cols-3 p-3 text-black sm:w-4/5 sm:px-1">
      <div className="flex justify-start items-end col-span-1">
        <RoundButton onClick={() => backBtnOnClick(url)} text="<" />
      </div>
      <div className="flex items-center justify-center col-span-1 text-center">
        {forName}
      </div>
    </div>
  );
}
