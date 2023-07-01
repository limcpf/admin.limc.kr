"use client";
import React, {FormEvent} from "react";
import DetailForm from "@/components/form/DetailForm";
import {DetailFormProp} from "@/types/detailForm";
import {useRouter} from "next/navigation";

type Props = {
    form:DetailFormProp
}

const onSubmit = (evt:FormEvent) => {
    evt.preventDefault();
}

export default function pageWrapper({ form }: Props) {
    const router = useRouter();
    const bUrl = form.option?.backBtnUrl;
    const backBtnOnClick = () => {
        if(bUrl) router.push(bUrl);
        else router.back();

    }

       return (<>
            <div className="p-3 text-black grid grid-cols-3 w-full justify-between">
                <div className="col-span-1 flex justify-start items-end">
                    <button 
                        type="button" 
                        className="col-span-1 text-gray-700 bg-white border border-gray-300  hover:bg-gray-100 font-medium rounded-full text-sm px-3 py-1.5"
                        onClick={() => backBtnOnClick()}
                    >
                            Back
                    </button>
                </div>
                <div className="col-span-1 text-center flex items-center justify-center">정보</div>
            </div>    
            <hr className="pb-2 w-full" />
            <DetailForm form={form} onSubmit={onSubmit} />
        </>)
}
