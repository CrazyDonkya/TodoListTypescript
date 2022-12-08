import React from "react"
import "./Header.scss"


interface HeaderProps{
    noteCount:number;
}

export const Header: React.FC<HeaderProps> = ({noteCount: nodeCount}) => {
    return(
        <div className="header">
            <div className="header_title">
                Notelist: <b>{nodeCount}</b>
            </div>
        </div>
    )
}