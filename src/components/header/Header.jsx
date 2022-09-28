import React from "react";
import "./Header.css"
import {Location} from "react-router-dom";
import { HomeIcon } from "./HomeIcon";


const Header = ({children}) => {

    return (
        <>
            <div className="header">
            <a href="/" className="next_page"> 
                <HomeIcon/>
                 Home</a>


                    <div className="headerLink">
                        <a className="next_page" href="/Prices">
                        Price</a>

                        <a className="next_page" href="/Gauge">
                        Gauge</a>

                        <a className="next_page" href="/Usage">
                        Usage</a>
                    </div>

                



            </div>
            {children}
        </>
    )
}

export default Header

