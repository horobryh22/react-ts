import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
    console.log('App is rendering');
    return (
        <div>
            {/*<AppTitle title={'This is APP component'}/>*/}
            {/*Article1*/}
            {/*<Rating  value={3}/>*/}
            <Accordion titleValue={'Menu'} collapsed = {false}/>
            <Accordion titleValue={'List Users'} collapsed = {true}/>
            {/*Article1*/}
            {/*<Rating value={4}/>*/}
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
