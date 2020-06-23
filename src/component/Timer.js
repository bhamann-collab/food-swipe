import React, { useState, useEffect, useRef, } from 'react'
import { useHistory } from 'react-router-dom'

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(30)
    let history = useHistory();

    const intervalRef = useRef(30);

    let swipeTimer

    useEffect(() => {
        swipeTimer = setInterval(() => {
            intervalRef.current--
            setTimeLeft(intervalRef.current)
            console.log(intervalRef)
            if (intervalRef.current === 0) {
                clearInterval(swipeTimer)
                transitionToResults()
            }
        }, 1000);
    }, [])

    function transitionToResults() {
        console.log("We are going to transition to the results page")
        history.push('/pageResults')
    }

    return (
        <div className="timer">
            <h1>Time Left: {intervalRef.current}</h1>
        </div>
    )
}

export default Timer
