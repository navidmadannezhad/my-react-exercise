import React, { useEffect, useState } from "react";

const TestTimer = () => {

    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        let timer = setInterval(() => {
            setSeconds(function(seconds){
                console.log(seconds);
                return seconds - 1;
            });
        }, 1000)
    }, []);

    return (
        <div className="timer-component text-light">
            { seconds }
        </div>
    )
}

export default TestTimer; 