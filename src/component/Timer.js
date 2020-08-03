import React, { useState, useEffect, useRef, } from 'react'
import { useHistory } from 'react-router-dom'

const Timer = (props) => {
    const [timeLeft, setTimeLeft] = useState(30)


    let history = useHistory();

    const intervalRef = useRef(450);

    let swipeTimer

    useEffect(() => {
        swipeTimer = setInterval(() => {
            intervalRef.current--
            setTimeLeft(intervalRef.current)
            //Passing timer props to Parent
            props.propTimer(intervalRef.current)
            if (intervalRef.current === 0) {
                clearInterval(swipeTimer)
                props.transitionToResults()
            }
        }, 100);
    }, [])


    return (
        <div className="timer">
            <h1>Time Left: {Math.ceil(intervalRef.current/10)}</h1>
        </div>
    )
}

export default Timer
