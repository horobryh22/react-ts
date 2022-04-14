import React, {useState} from 'react';
import classes from './OnOff.module.css'


export const UncontrolledOnOff = () => {

    const [on, setOn] = useState<boolean>(false);

    const onClickButtonHandler = (on: boolean) => {
        return () => setOn(on);
    }


    return (
        <div className={classes.wrapper}>
            <button onClick={onClickButtonHandler(true)} className={on ? classes.on : ''}>On</button>
            <button onClick={onClickButtonHandler(false)} className={!on ? classes.off : ''}>Off</button>
            <div className={`${classes.circle} ${on ? classes.circleOn : classes.circleOff}`}></div>
        </div>
    );
};
