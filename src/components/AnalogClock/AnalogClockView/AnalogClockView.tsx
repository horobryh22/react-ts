import React from 'react';
import {ClockViewPropsType} from '../AnalogClock';
import classes from './AnalogClockView.module.css'

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {

    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const secondsStyle = {
        transform: `rotate(${sec * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${min * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    return (
        <>
            <div className={classes.clock}>
                <div className={classes.analogClock}>
                    <div className={classes.dial + ' ' + classes.seconds} style={secondsStyle}/>
                    <div className={classes.dial + ' ' + classes.minutes} style={minutesStyle}/>
                    <div className={classes.dial + ' ' + classes.hours} style={hoursStyle}/>
                </div>
            </div>
        </>

    )
}