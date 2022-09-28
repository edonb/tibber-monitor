import Gauge from "../../../components/gauge/Gauge";
import {SUBSCRIBE_POWER} from "../../../TibberApiComponents/GraphQL/Queries";
import {useSubscription} from "@apollo/client";
import React from "react";

const PowerGauge = () => {
    const {data, loading, error} = useSubscription(SUBSCRIBE_POWER)

    if(loading){
        return(
            <Gauge min={0} max={10000} current={Math.random()*10000} unit="kwh" title="Loading.."></Gauge>
        )
    }

    if(error){
        return <p>{error.message}</p>
    }

    const currentData = data.liveMeasurement
    return <Gauge min={currentData.minPower} max={currentData.maxPower} current={currentData.power} unit="kwh" title="Power Usage"></Gauge>


}

export default PowerGauge