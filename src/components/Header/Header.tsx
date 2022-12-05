import React from "react"
import "./Header.scss"


interface HeaderProps{
    todoCount:number;
}

export const Header: React.FC<HeaderProps> = ({todoCount}) => {
    return(
        <div className="header">
            <div className="header_title">
                Todolist: <b>{todoCount}</b>
            </div>
        </div>
    )
}