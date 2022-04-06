import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';

function App() {
    console.log('App is rendering');
    return (
        <div>
            <Accordion titleValue={'Menu'} collapsed = {false}/>
            <Accordion titleValue={'List Users'} collapsed = {true}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff isOn={true}/>
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle({title}: AppTitlePropsType) {
    console.log('AppTitle is rendering');
    return <div>{title}</div>;
}



export default App;
