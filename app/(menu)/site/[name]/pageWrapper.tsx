"use client";
import React, {FormEvent, FormEventHandler} from "react";
import DetailForm from "@/components/form/DetailForm";
import {DetailFormProp} from "@/types/detailForm";

type Props = {
    form:DetailFormProp
}

const onSubmit = (evt:FormEvent) => {
    evt.preventDefault();
}

export default function pageWrapper({ form }: Props) {
       return  <DetailForm form={form} onSubmit={onSubmit} />
}
