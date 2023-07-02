"use client";
import React from "react";
import Site from "@/lib/classes/domain/site/Site.class";
import List from "@/lib/classes/form/List.class";
import { ListFormProp, Page } from "@/types/form";
import SiteListFormHeaders from "@/lib/form/list/SiteListFormHeaders";
import ListForm from "@/components/form/ListForm";
import Button from "@/components/btn/Button";
import { useRouter } from "next/navigation";

export default function SitePageWrapper({
  data,
}: {
  data: Page<Site>;
}) {
  const router = useRouter();

  let list: List<Site> = new List<Site>(data);

  let form: ListFormProp<Site> = {
    header: SiteListFormHeaders,
    list: list,
  };

  return (
    <div className="p-5">
      <div className="w-full flex justify-end items-center mb-3">
        <Button
          onClick={() => router.push("/site/add")}
          text="+"
          type="ROUNDED"
        />
      </div>
      <ListForm form={form} />
    </div>
  );
}
