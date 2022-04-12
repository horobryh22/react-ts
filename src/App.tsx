import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    console.log('App is rendering');
    return (
        <div>
            {/*<Accordion titleValue={'Menu'} collapsed = {false}/>*/}
            {/*<Accordion titleValue={'List Users'} collapsed = {true}/>*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'List Users'}/>
            <hr/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <hr/>
            <OnOff/>
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
