"use client";

import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import React from "react";

export default function RootHeader() {
  const router = useRouter();

  return (
    <header>
      <div className="header-wrapper">
        <div className="root-header" onClick={() => router.push("/")}>
          <span className="site-name">Dao-Admin</span>
          <div className={"hidden col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12"}/>
          <div className={"hidden sm:col-span-1 sm:col-span-2 sm:col-span-3 sm:col-span-4 sm:col-span-5 sm:col-span-6 sm:col-span-7 sm:col-span-8 sm:col-span-9 sm:col-span-10 sm:col-span-11 sm:col-span-12"}/>
        </div>
        <NavBar />
      </div>
    </header>
  );
}
