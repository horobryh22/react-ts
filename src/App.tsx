import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {Select} from './components/Select/Select';

function App() {

    const [valueSelect, setValueSelect] = useState<string | null>(null);
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(false);

    const showMeValue = (value: any) => {
        alert(value);
    }

    return (
        <div className={'App'}>
            <Accordion
                items={[
                    {title: 'Dimych', value: '1'},
                    {title: 'Artem', value: '2'},
                    {title: 'Viktor', value: '3'},
                ]}
                showMeValue={showMeValue}
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                setAccordionCollapsed={setAccordionCollapsed}
            />
            <hr/>
            <Select
                value={valueSelect}
                options={
                    [
                        {title: 'First', value: 1},
                        {title: 'Second', value: 2},
                        {title: 'Third', value: 3},
                        {title: 'Fourth', value: 4},
                    ]
                }
                changeTitle={setValueSelect}
            />
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
