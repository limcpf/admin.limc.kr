import React from "react";
import {DetailFormProp} from "@/types/detailForm";
import PageWrapper from "./pageWrapper";

const detailForm:DetailFormProp = {
    inputs: [
        {
            name: "이름",
            id: "name",
            col: 12,
            type: "TEXT"
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
            type: "TEXT"
        },
        {
            name: "수정일시",
            id: "modifiedAt",
            col: 12,
            type: "TEXT"
        }
    ],
    data: [],
    option: {
        backBtnUrl: "/site"
    }
}

type Props = {
    params: {
       name: string 
    }
}


export default async function SiteDetailPage({params}: Props) {
    return <div className="flex w-full justify-center">
        <PageWrapper form={detailForm}/>
    </div>
}
