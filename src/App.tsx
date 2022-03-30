import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
    console.log('App is rendering');
    return (
        <div>
            <AppTitle title={'This is APP component'}/>
            Article1
            <Rating  value={3}/>
            <Accordion title={'Menu'}/>
            Article1
            <Rating value={4}/>
        </div>
    );
}

function AppTitle(props: any) {
    console.log('AppTitle is rendering');
    return <div>{props.title}</div>;
}



export default App;
