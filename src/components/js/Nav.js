import React from 'react';
import "../css/Nav.css";
import {NavLink} from "react-router-dom";
import homeLogo from "../../assets/nav/logo.png"

export default function Nav() {
    return (
        <div className="nav-container">
            <nav>
                <NavLink to="Landing" className="homeLogo" ><img className="logo" src={homeLogo} alt='' ></img></NavLink>
                <NavLink to="Careers" className="NavLinks" activeStyle={{textDecoration: "underline"}}>Careers</NavLink>
                <NavLink to="Resources" className="NavLinks" activeStyle={{textDecoration: "underline"}}>Resources</NavLink>
                <NavLink to="Levels" className="NavLinks" activeStyle={{textDecoration: "underline"}}>Levels</NavLink>
                <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle"/>
        <div class="menu">
            <a href="#">Careers</a>
            <a href="#">Resources</a>
            <a href="#">Levels</a>
            
        </div>
            </nav>

        </div>
    )
}
