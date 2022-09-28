import React from "react";
import "./Header.css"
import {Link, useLocation} from "react-router-dom";

const Header = ({children}) => {
    const loc = useLocation().pathname
    console.log(loc)
    return (
        <>
            <div className="header">
                <Link pressed={loc==="/"?"Ja":null} to="/" className="header-home"> Home </Link>
                <div className="header-charts">
                    <Link pressed={loc==="/Prices"?"Ja":null} to="/Prices"> Price </Link>
                    <Link pressed={loc==="/Gauge"?"Ja":null} to="/Gauge"> Gauge </Link>
                    <Link pressed={loc==="/Usage"?"Ja":null} to="/Usage"> Usage</Link>
                </div>
            </div>
            {children}
        </>
    )
}

export default Header