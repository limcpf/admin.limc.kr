"use client";

import NavBar from "@/components/NavBar";
import {useRouter} from "next/navigation";


export default function RootHeader() {
    const router = useRouter();

    return (<header>
        <div className="header-wrapper">
            <div className="root-header" onClick={() => router.push("/")}>
                <span className="site-name">Dao-Admin</span>
            </div>
            <NavBar />
        </div>
    </header>)
}
