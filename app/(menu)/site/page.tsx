import "./site.css";
import _ from "lodash";
import React from "react";
import { METHODS } from "../../../lib/constants/InputType";
import { API_URLS } from "../../../lib/constants/API";
import { CellFormProp } from "../../../types/cellForm";
import CellForm from "../../../components/form/CellForm";

const cellForm: CellFormProp = {
  header: [
    {
      name: "이름",
      id: "name",
      col: 6,
      type: "TEXT",
      align: "center",
      option: {
        href: "/site/",
        hrefId: "name",
      },
    },
    {
      name: "생성일시",
      id: "createdAt",
      col: 3,
      type: "DATE",
      align: "center",
    },
    {
      name: "수정일시",
      id: "updatedAt",
      col: 3,
      type: "DATE",
      align: "center",
    },
  ],
  data: [],
};
async function getData() {
  const res = await fetch(process.env.API_SERVER_URL + API_URLS.priSite, {
    method: METHODS.GET,
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  return res.json();
}

export default async function SitePage() {
  const data = await getData();

  if (data) {
    cellForm.data = data;
  }

  return <CellForm form={cellForm} />;
}
