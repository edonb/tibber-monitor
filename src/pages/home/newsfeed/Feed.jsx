import React, {createRef, useEffect, useMemo, useRef, useState} from "react";
import useAnimation from "./use-animation";
import usePrevious from "./use-previous";
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import "./Feed.css"

const durationTime = 100000; // seconds
const scrollStates = {
    up: "left",
    down: "right"
};

const Feed = ({news}) => {
        console.log(news);


    return (

<div class="ticker-wrapper-h">
	<div className="tittle-container">
        <div class="title">
        <h4>Nyheter</h4> 
    </div>

    <div className="triangle">
    </div>
    </div>
    <div class="news-ticker-h">
	
    {
        news.map( n => {
            return  (

                <p><b>{n.title}</b>: {n.summary}</p>
                    
            )
        })
    }
        </div></div>
    )
    
}


export default Feed
