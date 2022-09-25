import React, {useEffect, useState} from "react";
import {useSubscription} from "@apollo/client";
import {SUBSCRIBE_LIVE} from "../GraphQL/Queries";
import {CartesianGrid, Line, Tooltip, XAxis, LineChart} from "recharts";
import ArcGaugeComponent from "../../gauge/Gauge";

const graphPoint = {
    min: Number,
    max: Number,
    mean: Number,
    power: Number,
    time: Date,

}

const Subscribe = () => {
    const [graph, setGraph] = useState([])

    const {data, loading, error} = useSubscription( SUBSCRIBE_LIVE )

    useEffect(() => {
        if(!data) return
        const now = data.liveMeasurement
        const point = {
            time:   now.timestamp,
            min:    now.minPower,
            max:    now.maxPower,
            mean:   now.averagePower,
            power:  now.power,
            price: now.price,
        }
        setGraph([...graph, point])
    },[data])

    if (loading) return <p>Loading .. </p>
    if (!data) return

    const max = data.liveMeasurement.maxPower
    const min = data.liveMeasurement.minPower
    const current = data.liveMeasurement.power

    const maxWidth = 80;
    const minWidth = 20;
    const currentWidth = (current-min) / (max-min)  * maxWidth
    console.log(max-min)
    console.log(data)

    return(
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
            <ArcGaugeComponent value={currentWidth}/>
        </div>
    )
}

export default Subscribe