import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(false);

    return (
        <div className={'App'}>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}/>
            <hr/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <hr/>
            <OnOff on={on} setOn={setOn}/>
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
