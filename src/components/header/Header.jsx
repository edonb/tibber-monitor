import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";

const Header = ({children}) => {

    return (
        <>
            <div className="header">
                <Link to="/" className="header-home"> Home </Link>
                <div className="header-charts">
                    <Link to="/Prices"> Price </Link>
                    <Link to="/Usage"> Usage</Link>
                </div>
            </div>
            {children}
        </>
    )
}

export default Header