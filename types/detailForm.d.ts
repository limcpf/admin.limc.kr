import {Detail} from "@/app/(menu)/site/[name]/page";
import {FormEventHandler} from "react";

export type DetailFormInputOption = {
    disabled?: boolean;
}

export type DetailFormInput = {
    name: string;
    id: string;
    col: number;
    type: "TEXT";
    option?: DetailFormInputOption;
}


export type DetailFormOption = {
    backBtnUrl: string
}

export type DetailFormProp = {
    inputs: DetailFormInput[];
    data: Detail;
    option?: DetailFormOption;
}
