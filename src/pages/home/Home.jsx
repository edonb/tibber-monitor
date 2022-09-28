import React from "react";
import GetUsers from "../../TibberApiComponents/getusers/GetUsers";
import PowerGauge from "./gauges/PowerGauge";
import PriceGauge from "./gauges/PriceGauge";
import "./Home.css"
import NewsFeed from "./newsfeed/TV2News";


const Home = () => {

    return (
        <div className="home">
            <NewsFeed/>
            <div className="home-gauges">
                <div className="home-gauges-power"><PowerGauge/></div>
                <div className="home-gauges-price"><PriceGauge/></div>
            </div>

        </div>
    )
}

export default Home