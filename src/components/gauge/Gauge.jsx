import React from "react";
import "./Gauge.css"

const Gauge = ({
                   title = "Power Usage",
                   min = 100,
                   max = 800,
                   current = 800,
                   unit = "kwh",
                   decimals = 0,

               }) => {
    const angle = (current - min) / (max - min) * 120 - 60;

    return (
        <div className="gauge">
            <div className="gauge-dial">
                <div className="gauge-title">
                    <h5>{title}</h5>
                </div>
                <div className={"gauge-min"}>
                    <p>{min.toFixed(decimals)}{unit}</p>
                </div>
                <div className={"gauge-max"}>
                    <p>{max.toFixed(decimals)}{unit}</p>
                </div>
                <div className={"gauge-current"}>
                    <h4>{current.toFixed(decimals)}{unit}</h4>
                </div>
                <div className="gauge-dot gauge-min-dot"/>
                <div className="gauge-dot gauge-max-dot"/>
                <div className="gauge-circle">
                    <div className="gauge-arm" style={{transform: `rotate(${angle}deg)`}}>
                        <div className="gauge-dot gauge-arm-dot"></div>
                    </div>
                </div>
            </div>
            <div className="gauge-pivot">
            </div>


        </div>
    )
}

export default Gauge
