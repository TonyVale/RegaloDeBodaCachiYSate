import React from "react";
import { BsSuitHeartFill } from 'react-icons/bs'
import "../style/header.css";
export default function Header(){
    return(
        <header className="header">
            <BsSuitHeartFill className="header-heart-icon"/><div className="header-main">Cachi   Y   Sate</div><BsSuitHeartFill className="header-heart-icon"/>
        </header>
    );
}