export type CellFormHeaderOption = {
    disabled?: boolean;
    href?: string;
    hrefId?: string;
}

export type CellFormHeader = {
    name: string;
    id: string;
    col: number;
    type: "TEXT" | "NUMBER" | "DATE";
    align: "left" | "center" | "right";
    option?: CellFormHeaderOption;
}


export type CellFormProp = {
    header: CellFormHeader[];
    data: Object[];
}
