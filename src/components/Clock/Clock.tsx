import React, {useEffect, useState} from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import classes from './Clock.module.css'

export type ClockPropsType = {
    seconds: number
    modernStyle: boolean
}

const getTimeSeconds = (time: number) => (60 - time) | 0;
const getTimeMinutes = (time: number) => ((time % 3600) / 60) | 0;
const getTimeHours = (time: number) => ((time % 86400) / 3600) | 0;

const timerProps = {
    isPlaying: true,
    size: 100,
    strokeWidth: 6
};

const renderTime = (dimension: string, time: number) => {

    const updateTime = time < 10 ? '0' + time : time
    return (
        <div className={classes.timeWrapper}>
            <div className={classes.time}>{updateTime}</div>
            <div>{dimension}</div>
        </div>
    );
};

export const Clock: React.FC<ClockPropsType> = ({seconds, modernStyle}) => {

    const [counter, setCounter] = useState(seconds);
    const [activateStyle, setActivateStyle] = useState<boolean>(modernStyle)

    useEffect(() => {

        const id = setInterval(() => {
            console.log('tick')
            setCounter((state: number) => state + 1);
        }, 1000);

        return () => {  //функция срабатывает перед гибелью компоненты, аналог ComponentWillUnmount в классовых компонентах
            clearInterval(id);
        }

    }, []);


    const hours = Math.floor(counter / 60 / 60);
    const minutes = Math.floor(counter / 60) - (hours * 60);
    const secs = counter % 60;


    return (
        <div className={classes.mainWrapper}>
            <div className={classes.clockWrapper}>
                {activateStyle
                    ? <div className={classes.timerContainer}>
                        <CountdownCircleTimer
                            {...timerProps}
                            duration={86400}
                            initialRemainingTime={86400 - counter}
                            colors="#D14081"
                            onComplete={() => {
                                return {shouldRepeat: true}
                            }}
                        >
                            {({remainingTime, color, elapsedTime}) => {
                                return (
                                    <span style={{color}}>
                            {renderTime('hours', getTimeHours(counter))}
                        </span>
                                )
                            }}
                        </CountdownCircleTimer>
                        <CountdownCircleTimer
                            {...timerProps}
                            duration={3600}
                            initialRemainingTime={3600 - minutes * 60}
                            colors="#EF798A"
                            onComplete={() => {
                                return {shouldRepeat: true}
                            }}
                        >
                            {({remainingTime, color, elapsedTime}) => {
                                return (
                                    <span style={{color}}>
                            {renderTime('minutes', getTimeMinutes(counter))}
                        </span>
                                )
                            }}
                        </CountdownCircleTimer>
                        <CountdownCircleTimer
                            {...timerProps}
                            duration={60}
                            initialRemainingTime={60 - secs}
                            colors="#218380"
                            onComplete={() => {
                                return {shouldRepeat: true}
                            }}
                        >
                            {({remainingTime, color}) => {
                                return (
                                    <span style={{color}}>
                            {renderTime('seconds', getTimeSeconds(remainingTime))}
                        </span>
                                )
                            }}
                        </CountdownCircleTimer>
                    </div>
                    : <div className={classes.simpleClock}>
                        {hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}:{secs < 10 ? '0' + secs : secs}
                    </div>
                }
            </div>
            <button
                className={classes.button}
                onClick={() => setActivateStyle(!activateStyle)}
            >Change Clock's style</button>
        </div>
    );
};
