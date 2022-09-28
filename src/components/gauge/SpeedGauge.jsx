import React from "react";
import { useGauge } from "use-gauge";
import "./SpeedGauge.css"


function getStroke (angle) {
    const value = (angle-90)/180 * 100
    console.log(value)
    if (value <= 20) return "#86efac"
    else if (value > 20 && value <= 60) return "#d1d5db"
    else if (value > 60 && value <= 80) return "#fde047"
    else return "#f87171"
}

export function Speed({value, domain, unit, decimals}) {
    const gauge = useGauge({
        domain: domain,
        startAngle: 90,
        endAngle: 270,
        numTicks: 21,
        diameter: 200
    });
    const needle = gauge.getNeedleProps({
        value,
        baseRadius: 8,
        tipRadius: 2
    });

    return (
        <div className="speed_gauge">
            <svg style={{overflow: "visible"}} className="speed_gauge speed_gauge_container" >
                <g id="ticks">
                    {gauge.ticks.map((angle) => {
                        return (
                            <React.Fragment key={`tick-group-${angle}`}>
                                <line
                                    style={{ stroke: `${getStroke(angle)}`}}
                                    strokeWidth={2}
                                    stroke={"black"}
                                    x1={100*Math.cos((angle+90)/180 * Math.PI)}
                                    x2={108*Math.cos((angle+90)/180 * Math.PI)}
                                    y1={100*Math.sin((angle+90)/180 * Math.PI)}
                                    y2={108*Math.sin((angle+90)/180 * Math.PI)}
                                />
                                )}
                            </React.Fragment>
                        );
                    })}
                    <React.Fragment>
                        <text
                            x={-130}
                            y={20}
                        >
                            {domain[0].toFixed(decimals)+unit}
                        </text>
                        <text
                            x={70}
                            y={20}
                            dx={-"100%"}
                        >
                            {domain[1].toFixed(decimals)+unit}
                        </text>
                        <text
                            x={-15}
                            y={30}

                        >
                            {value.toFixed(decimals)+unit}
                        </text>
                    </React.Fragment>
                </g>
                <g id="needle">
                    <circle className="fill-gray-300" {...needle.base} r={12} />
                    <circle className="fill-gray-700" {...needle.base} />
                    <circle className="fill-gray-700" {...needle.tip} />
                    <polyline className="fill-gray-700" points={needle.points} />
                    <circle className="fill-white" {...needle.base} r={4} />
                </g>
            </svg>
        </div>
    );
}
