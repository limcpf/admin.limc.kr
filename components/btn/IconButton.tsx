import './IconButton.css'
import React from "react";

export default function IconButton({ children }) {
    return <div className="icon-btn select-none shadow">
        {children}
    </div>
}
