import React from 'react';
import {ClockViewPropsType} from '../AnalogClock';

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {

    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return (
        <>
            {hours < 10 ? '0' + hours : hours}:{min < 10 ? '0' + min : min}:{sec < 10 ? '0' + sec : sec}
        </>
    )

}