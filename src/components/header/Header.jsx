import React from "react";
import "./Header.css"
import { HomeIcon } from "./HomeIcon";
import {Link, useLocation} from "react-router-dom";


const Header = ({children}) => {
    const loc = useLocation().pathname
    console.log(loc)
    return (
        <>
            <div className="header">

            <a pressed={loc==="/"?"Ja":null} href="/" className="next_page"> 
                <HomeIcon/>
                 Home</a>


                    <div className="headerLink">
                        <a  pressed={loc==="/Prices"?"Ja":null} className="next_page" href="/Prices">
                        Price</a>

                        <a pressed={loc==="/Gauge"?"Ja":null} className="next_page" href="/Gauge">
                        Gauge</a>

                        <a pressed={loc==="/Usage"?"Ja":null} className="next_page" href="/Usage">
                        Usage</a>
                    </div>
            </div>
            {children}
        </>
    )
}

export default Header

