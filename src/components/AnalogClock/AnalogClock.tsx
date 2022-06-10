import React, {useEffect, useState} from 'react';
import {DigitalClockView} from './DigitalClockView/DigitalClockView';
import {AnalogClockView} from './AnalogClockView/AnalogClockView';

export type AnalogClockPropsType = {
    mode?: 'digital' | 'analog'
}

export type ClockViewPropsType = {
    date: Date
}

export const AnalogClock: React.FC<AnalogClockPropsType> = ({mode}) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            console.log('tick')
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])


    let view;

    switch (mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <>
            {view}
        </>
    )


};


