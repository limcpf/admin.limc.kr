"use client";

import {SiteDetail} from "@/app/(menu)/site/[name]/page";
import {DetailFormInput, DetailFormProp} from "@/types/detailForm"
import {FormEventHandler, ReactNode} from "react"

type Props = {
    form: DetailFormProp,
    onSubmit: FormEventHandler<HTMLFormElement>,
    children?:ReactNode
}

export default function DetailForm({ form, onSubmit, children }:Props) {
    const inputs = form.inputs;
    const detail: SiteDetail = form.data as SiteDetail;

    return <form onSubmit={onSubmit} className="grid grid-cols-12 sm:w-4/5 gap-2 p-3 pt-1 w-full">
       { inputs.map(
            (input:DetailFormInput, idx:number) => {
                return (
                    <div 
                        key={`detail-form-input-${idx}`} 
                        className={`col-span-12 sm:col-span-${input.col}`}
                    >
                        <label 
                            htmlFor={input.id} 
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            {input.name}
                        </label>
                        <input 
                            type="text"
                            id={input.id}
                            name={input.id}
                            disabled={input.option?.disabled}
                            defaultValue={detail[input.id]}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                            //required
                        />
                    </div>
                );
            }
       ) }
        { children ? children : <></> }
    </form>;
}
