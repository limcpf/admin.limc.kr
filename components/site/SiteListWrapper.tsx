"use client";

import React from 'react';
import _ from 'lodash';
import {API_URLS} from "@/lib/constants/API";
import {Form, Input, INPUT_TYPES, METHODS} from "@/lib/constants/InputType";
import {Site} from "@/types";
import {useState} from "react";

type Props = {
    sites: Site[]
}


const form:Form = {
    method: METHODS.GET,
    action: API_URLS.priSite,
    option: {
        title: "테스트용 제목",
        setRefresh: true,
        submitText: "저 장"
    },
    inputs: [
        {
            id: "id",
            type: INPUT_TYPES.TEXT_AREA,
            option: {
                hide: true
            }
        },
        {
            id: "name",
            type: INPUT_TYPES.TEXT_INPUT,
            option: {
                title: "이름"
            }
        },
        {
            id: "createdAt",
            type: INPUT_TYPES.TEXT_INPUT,
            option: {
                title: "생성일시",
                disabled: true
            }
        },
        {
            id: "modifiedAt",
            type: INPUT_TYPES.TEXT_INPUT,
            option: {
                title: "수정일시",
                disabled: true
            }
        }
    ]
}

export default function SiteListWrapper({sites}:Props) {
    const [selectedId, setSelectedId] = useState("");
    const [selectedSite, setSelectedSite] = useState<Site | undefined>(undefined);
    const [cform, setCform] = useState<Form>(form);

    const selectSite = (id: string) => {
        setSelectedId(id === selectedId ? "" : id);
        if(id !== selectedId) {
            setSelectedId(id);
            const site = sites.find((site) => site.id === id);
            setSelectedSite(site);
            
            const nform:Form = _.cloneDeep(cform);
            
            if(site) {
                const ss: string[] = Object.keys(site);
                for(const key of ss) {
                    const input:Input | undefined 
                        = nform.inputs.find((input) => input.id === key);
                    if(!input) continue;
                    if(input.option) input.option.value = site[key];
                }
                setCform(nform);
            }
        } else {
            setSelectedId("");
            setSelectedSite(undefined);
        }
    }
   
   return (
        
   )

}
