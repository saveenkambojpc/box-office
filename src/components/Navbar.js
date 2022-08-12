import React from "react";
import {
    Link
} from "react-router-dom";

const links = [
    {to:"/", text:"Home Page"},
    {to:"/starred", text: "Starred Page"}
]

export default () => {
    return (


        <nav>
            <ul>
                {
                    links.map(e =><li key={e.to}><Link to={e.to}>{e.text}</Link></li>)
                }
          
            </ul>
        </nav>
    )
}