import React from "react";
import {DetailFormProp} from "@/types/detailForm";
import PageWrapper from "./pageWrapper";
import {API_URLS} from "@/lib/constants/API";
import {METHODS} from "@/lib/constants/InputType";

export class Detail {
    createdAt: string
    updatedAt: string
    
    constructor(
        createdAt: string,
        updatedAt: string
    ) {
       const koDtf = new Intl.DateTimeFormat("ko", {
            dateStyle: "long",
            timeStyle: "medium"
        });

        this.createdAt = koDtf.format(new Date(createdAt));
        this.updatedAt = koDtf.format(new Date(updatedAt))
    }
}

const detailForm:DetailFormProp = {
    inputs: [
        {
            name: "이름",
            id: "name",
            col: 12,
            type: "TEXT",
            option: {
                disabled: true
            }

        },
        {
            name: "토픽 개수",
            id: "topicCnt",
            col: 4,
            type: "TEXT",
            option: {
                disabled: true
            }
        },
        {
            name: "시리즈 개수",
            id: "seriesCnt",
            col: 4,
            type: "TEXT",
            option: {
                disabled: true
            }
        },
        {
            name: "글 개수",
            id: "postCnt",
            col: 4,
            type: "TEXT",
            option: {
                disabled: true
            }
        },
        {
            name: "생성일시",
            id: "createdAt",
            col: 12,
            type: "TEXT",
            option: {
                disabled: true
            }

        },
        {
            name: "수정일시",
            id: "updatedAt",
            col: 12,
            type: "TEXT",
            option: {
                disabled: true
            }

        }
    ],
    data: new Detail(new Date().toString(), new Date().toString()),
    option: {
        backBtnUrl: "/site"
    }
}

type Props = {
    params: {
       name: string 
    }
}


async function getData(name: string) {
    const res 
        = await fetch(
            `${process.env.API_SERVER_URL}${API_URLS.priSite}/${name}`
            , {
                method: METHODS.GET,
                headers: {
                    Authorization: `Bearer ${process.env.TOKEN}`
                }
            });

    if(!res.ok) {
        throw new Error(`${res.status}`);
    }

    
    return res.json();
}
export class SiteDetail extends Detail {
    name: string;
    topicCnt: number;
    seriesCnt: number;
    postCnt: number;
    constructor(
            name: string
			,topicCnt: number
			,seriesCnt: number
			,postCnt: number
			,createdAt: string
			,updatedAt: string
    ) {
        super(createdAt, updatedAt);
        this.name = name;
        this.topicCnt = topicCnt;
        this.seriesCnt = seriesCnt;
        this.postCnt = postCnt;
    }
}


export default async function SiteDetailPage({params}: Props) {
    if(!params.name) return <span>이름이 존재하지 않음</span>;
    const siteDetail = await getData(params.name);
    if(siteDetail) {
        const detail: SiteDetail
            = new SiteDetail(
                    siteDetail.name,
                    siteDetail.topicCnt,
                    siteDetail.seriesCnt,
                    siteDetail.seriesCnt,
                    siteDetail.createdAt,
                    siteDetail.updatedAt
                );

        detailForm.data = detail;
    }
    
    return <div className="flex flex-col w-full justify-center items-center">
        <PageWrapper form={detailForm}/>
    </div>
}
