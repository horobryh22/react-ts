import React from 'react';
import classes from './OnOff.module.css'

type OnOffType = {
    isOn: boolean
}

export const OnOff = ({isOn}: OnOffType) => {
    return (
        <div className={classes.wrapper}>
            <button className={isOn ? classes.on : ''}>On</button>
            <button className={!isOn ? classes.off : ''}>Off</button>
            <div className={`${classes.circle} ${isOn ? classes.circleOn : classes.circleOff}`}></div>
        </div>
    );
};
