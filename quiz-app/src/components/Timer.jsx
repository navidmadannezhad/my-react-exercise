import React, { useEffect, useState } from "react";

const required_hours = 0;
const required_minutes = 3;
const required_seconds = 10;

const Timer = () => {

    const [seconds, setSeconds] = useState(required_seconds);
    const [minutes, setMinutes] = useState(required_minutes);
    const [hours, setHours] = useState(required_hours);

    const lowerSeconds = () => {
        if(seconds <= 0){
            setSeconds(59);
            lowerMinutes();
        }else{
            setSeconds(seconds - 1)
        }
    }

    const lowerMinutes = () => {
        if(minutes <= 0){
            setMinutes(59);
            lowerHours();
        }else{
            setMinutes(minutes - 1)
        }
    }

    const lowerHours = () => {
        if(hours <= 0){
            setHours(24);
            lowerMinutes();
        }else{
            setHours(hours - 1)
        }
    }

    const startTimer = () => {
        let timer = setInterval(() => {
            lowerSeconds();
        }, 1000);
        return timer;
    }

    const stopTimer = timer => {
        clearInterval(timer);
    }

    useEffect(() => {
        let timer = startTimer();
        if(hours == 0 && minutes == 0 && seconds == 0){
            stopTimer(timer);
        }
    });

    return (
        <div className="timer-component text-light font">
            { 
                String(hours).length == 1 ? (
                    <span>
                        0{ hours }
                    </span>
                )
                :
                (
                    <span>
                        { hours }
                    </span>
                )
            }
            :
            { 
                String(minutes).length == 1 ? (
                    <span>
                        0{ minutes }
                    </span>
                )
                :
                (
                    <span>
                        { minutes }
                    </span>
                )
            }
            :
            { 
                String(seconds).length == 1 ? (
                    <span>
                        0{ seconds }
                    </span>
                )
                :
                (
                    <span>
                        { seconds }
                    </span>
                )
            }
        </div>
    )
}

export default Timer;