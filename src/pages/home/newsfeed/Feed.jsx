import React, {createRef, useEffect, useMemo, useRef, useState} from "react";
import useAnimation from "./use-animation";
import usePrevious from "./use-previous";
import "./Feed.css"

const durationTime = 100000; // seconds
const scrollStates = {
    up: "left",
    down: "right"
};

const Feed = ({news}) => {
    const lists = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const scrollListRef = useRef(null);
    const [scrollValue, setScrollValue] = useState(0);
    const [scrollState, setScrollState] = useState(scrollStates.down);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [offsetHeight, setOffsetHeight] = useState(0);

    const prevScrollState = usePrevious(scrollState);

    const isUp = useMemo(() => scrollState === scrollStates.up, [scrollState]);

    const { value: scrollAnimation, animationState } = useAnimation(
        "linear",
        durationTime / 2,
        isUp ? 501 : 500 // definitely a hack
    );

    const scrollMax = useMemo(() => scrollHeight - offsetHeight, [
        scrollHeight,
        offsetHeight
    ]);

    useEffect(() => {
        const { current } = scrollListRef;
        if (current !== null) {
            setScrollHeight(current.scrollHeight);
            setOffsetHeight(current.offsetHeight);
        }
    }, []); //

    useEffect(() => {
        if (!scrollMax) return;

        if (scrollValue === 0 && scrollState !== scrollStates.down) {
            setScrollState(scrollStates.down);
        } else if (scrollValue >= scrollMax && scrollState !== scrollStates.up) {
            setScrollState(scrollStates.up);
        }
    }, [scrollValue, scrollMax, animationState, scrollState]);

    useEffect(() => {
        // consider to export the available states from the hook (improvement)
        if (animationState === "idle") return;

        const value = scrollMax * scrollAnimation;

        const isSameScroll = prevScrollState === scrollState;

        if (animationState === "finished" && isSameScroll) {
            const finishedValue = isUp ? 0 : scrollMax;
            if (value !== finishedValue) {
                setScrollValue(finishedValue);
                return;
            }
        }
        if (animationState !== "started") return;

        setScrollValue(isUp ? scrollMax - value : value);
    }, [
        scrollAnimation,
        scrollMax,
        isUp,
        animationState,
        prevScrollState,
        scrollState
    ]);

    useEffect(() => {
        const { current } = scrollListRef;
        if (!current) return;

        current.scrollTop = scrollValue;
    }, [scrollValue]);

    const ulStyle = {

    };


    return (
            <ul ref={scrollListRef} className="locations-list" style={ulStyle}>
                {news.map((item, i) => (
                    <li className={"news-card"} key={i}>
                        {item.summary}
                    </li>
                ))}
            </ul>
    );
}


export default Feed