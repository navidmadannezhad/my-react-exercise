import React, { useEffect, useState } from "react";

const Timer = () => {

    const [seconds, setSeconds] = useState(10);
    const [minutes, setMinutes] = useState(3);
    const [hours, setHours] = useState(0);

    const lowerSeconds = () => {
        if(seconds === 0){
            console.log("second is -!");
            setSeconds(59);
            lowerMinutes();
        }else{
            setSeconds(function(seconds){
                return seconds - 1;
            })
        }
    }

    const lowerMinutes = () => {
        if(minutes <= 0){
            setMinutes(59);
            lowerHours();
        }else{
            setMinutes(function(minutes){
                return minutes - 1;
            })
        }
    }

    const lowerHours = () => {
        if(hours <= 0){
            setHours(24);
            lowerMinutes();
        }else{
            setHours(function(hours){
                return hours - 1;
            })
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
    }, []);

    return (
        <div className="timer-component text-light">
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