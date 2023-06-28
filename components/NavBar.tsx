'use client';

import "./NavBar.css";
import React, { useState } from "react";
import NavItem from "./NavItem";

export type Menu = {
    text: string;
    href: string;
}

const menus = [
    {
        text: "Site",
        href: "/site"
    },
    {
        text: "Topic",
        href: "/topic"
    },
    {
        text: "Series",
        href: "/series"
    },
    {
        text: "Post",
        href: "/post"
    }
]

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="navbar">
      <div className="nav-over">
        { menus.map((menu, key) => <NavItem key={`nav-item-${key}`} menu={menu} isMobile={false} />) }
      </div>
      <div className="nav-under items-center justify-between">
        <button
          className="text-white p-2 m-2 rounded-md hover:bg-gray-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
        {isMenuOpen && (
          <div className="submenu p-2"> 
            { menus.map((menu, key) => <NavItem key={`nav-item-${key}`} menu={menu} isMobile={false} />) }
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
