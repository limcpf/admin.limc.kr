import {API_URL} from "./API";

export const INPUT_TYPES = {
    TEXT_INPUT: "TEXT_INPUT",
    TEXT_AREA: "TEXT_AREA"
} as const;


export const METHODS = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH",
    DELETE: "DELETE"
} as const;

export type InputOption = {
    column?: number;
    row?: number;
    rows?: number;
    value?: string;
    title?: string;
    disabled?: boolean;
    hide?: boolean;
    placeholder?: string;
}

export type TextInput = Input;

export type TextArea = Input & {
    rows: number;
}

export type Input = {
    id: string;
    type: INPUT_TYPE;
    option?: InputOption;
}

export type FormOption = {
    title?: string;
    submitText?: string;
    row?:number;
    column?:number;
    setRefresh?:boolean;
    rows?:number;
}

export type Form = {
    method: METHOD;
    action: API_URL;
    inputs: Input[];
    option?: FormOption;
}

export type METHOD = typeof METHODS[keyof typeof METHODS];
    export type INPUT_TYPE = typeof INPUT_TYPES[keyof typeof INPUT_TYPES];
