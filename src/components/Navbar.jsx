import React from "react";
import {
    Link, useLocation
} from "react-router-dom";
import { LinkStyled, NavList } from "./Navbar.style";

const links = [
    {to:"/", text:"Home Page"},
    {to:"/starred", text: "Starred Page"}
]

export default () => {
    const {pathname} = useLocation();
    
    return (


        <nav>
            <NavList>
                {
                    links.map(e =><li key={e.to} ><LinkStyled className={e.to === pathname ? 'active': ''} to={e.to}>{e.text}</LinkStyled></li>)
                }
            </NavList>
        </nav>
    )
}