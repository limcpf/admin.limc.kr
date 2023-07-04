"use client";
import React from "react";
import AddDetailForm from "@/components/form/AddDetailForm";
import Site from "@/lib/classes/domain/site/Site.class";
import SiteAddFormInputs from "@/lib/form/detail/SiteAddFormInputs";
import SiteAddFormOption from "@/lib/form/detail/SiteAddFormOption";

export default function SiteAddPage() {
  return (
    <AddDetailForm
      data={new Site("", "", "")}
      inputs={SiteAddFormInputs}
      option={SiteAddFormOption}
    />
  );
}
