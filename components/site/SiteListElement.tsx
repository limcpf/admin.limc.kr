import React from "react";

type Props = {
    isSelect: boolean,
    site: {
            id: string,
            name: string,
            createdAt: string,
    },
    onClick:Function
}

export default function SiteListElement({
    isSelect, site, onClick
}: Props){
    const {id, name, createdAt} = site;

    /** className */
    const wrapperBefore = `site-btn-wrapper trans-x-3 grid-cols-4 grid bg-white text-black gap-2 rounded`; 
    let wrapperAfter = isSelect ? wrapperBefore + " select-btn" : wrapperBefore;
    const idArea = "good col-span-1";
    const nameArea = "col-span-3 grid grid-flow-row grid-rows-3"; 
    const nameColumn = "site-name w-full mt-1 row-span-2 flex items-end";
    const dateColumn = "site-date w-full mb-1 row-span-1 flex items-start";

    return (
        <div className={wrapperAfter} onClick={() => onClick()}>
            <div className={idArea}>
                <div className="site-number">
                    {id} 
                </div>
            </div>
            <div className={nameArea} >
                <div className={nameColumn} >
                    <span>{name}</span>
                </div>
                <div className={dateColumn}>
                    <span>{createdAt}</span>
                </div>
            </div>
        </div>
    )
}
