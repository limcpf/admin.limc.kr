import React from "react";
import AddDetailForm from "@/components/form/detail/add/AddDetailForm";
import Site from "@/lib/classes/domain/site/Site.class";
import SiteAddFormInputs from "@/lib/form/site/detail/SiteAddFormInputs";
import SiteAddFormOption from "@/lib/form/site/detail/SiteAddFormOption";
import { addSite } from "@/lib/api/Site.api";

export default function SiteAddPage() {
  return (
    <AddDetailForm
      data={new Site("", "", "")}
      inputs={SiteAddFormInputs}
      option={SiteAddFormOption}
      func={addSite}
    />
  );
}
