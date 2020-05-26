import React from 'react';
import "../css/Nav.css";
import {NavLink} from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav-container">
            <nav>
                <NavLink to="Landing" className="homeLogo" >Home</NavLink>
                <NavLink to="Levels" className="NavLinks" activeStyle={{textDecoration: "underline"}}>Levels</NavLink>
                <NavLink to="Resources" className="NavLinks" activeStyle={{textDecoration: "underline"}}>Resources</NavLink>
                <NavLink to="Careers" className="NavLinks" activeStyle={{textDecoration: "underline"}}>Careers</NavLink>
            
            </nav>
        </div>
    )
}
