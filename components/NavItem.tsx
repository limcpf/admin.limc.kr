import React from "react";
import {useRouter, usePathname} from "next/navigation";
import {Menu} from "@/components/NavBar";

type Props = {
    menu: Menu;
    isMobile: boolean;
}
export default function NavItem({menu, isMobile}: Props) {
        const router = useRouter();
        const { text, href } = menu;
        const isActive = usePathname().startsWith(href) ? "isActive" : "";
        const mobileCss = isMobile ? "nav-mobile-item" : "nav-item";

        
        return (<div
                    onClick={() => router.push(href)}
                    className={`${mobileCss} ${isActive} cursor-pointer`}
                >
                    <span className="nav-link">
                        {text}
                    </span>
                </div>);
}
