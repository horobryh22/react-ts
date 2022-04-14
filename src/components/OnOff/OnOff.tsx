import React, {useState} from 'react';
import classes from './OnOff.module.css'

export type OnOffType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const OnOff: React.FC<OnOffType> = ({on, setOn}) => {

    const onCLickButtonHandler = (on: boolean): () => void => {
        return () => setOn(on);
    }

    return (
        <div className={classes.wrapper}>
            <button onClick={onCLickButtonHandler(true)} className={on ? classes.on : ''}>On</button>
            <button onClick={onCLickButtonHandler(false)} className={!on ? classes.off : ''}>Off</button>
            <div className={`${classes.circle} ${on ? classes.circleOn : classes.circleOff}`}></div>
        </div>
    );
};
