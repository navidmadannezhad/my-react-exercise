import React from 'react'
import { forwardRef, useImperativeHandle } from 'react';

const Timer = forwardRef((props, ref) => {

    const { hours = 0, minutes = 0, seconds = 60 } = {hours:0 , minutes: 0, seconds: 30};
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

    useImperativeHandle(ref, () => ({
        reset() { setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]) }
    }));

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) {
            if(!props.gameIsFinished){
                props.setTimeDone(true);
                props.setFinishState(true);
            }
        }
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
})

export default Timer;