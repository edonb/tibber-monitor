import { useState, useEffect } from "react";

const animationStates = {
    idle: "idle", // represents "delayed" state
    started: "started",
    finished: "finished"
};

export default function useAnimationTimer(duration = 1000, delay = 0) {
    const [elapsed, setTime] = useState(0);
    const [animationState, setAnimationState] = useState(animationStates.idle);

    useEffect(
        () => {
            let animationFrame, timerStop, start;
            // Function to be executed on each animation frame
            function onFrame() {
                setTime(Date.now() - start);
                loop();
            }

            // Call onFrame() on next animation frame
            function loop() {
                animationFrame = requestAnimationFrame(onFrame);
            }

            function onStart() {
                setAnimationState(animationStates.started);
                // Set a timeout to stop things when duration time elapses
                timerStop = setTimeout(() => {
                    setAnimationState(animationStates.finished);
                    cancelAnimationFrame(animationFrame);
                    setTime(Date.now() - start);
                }, duration);

                // Start the loop
                start = Date.now();
                loop();
            }

            // Reset animation state
            setAnimationState(animationStates.idle);

            // Start after specified delay (defaults to 0)
            const timerDelay = setTimeout(onStart, delay);

            // Clean things up
            return () => {
                setTime(0);
                clearTimeout(timerStop);
                clearTimeout(timerDelay);
                cancelAnimationFrame(animationFrame);
            };
        },
        [duration, delay] // Only re-run effect if duration or delay changes
    );

    return { elapsed, animationState };
}
