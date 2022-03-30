import React from 'react';
import './App.css';

function App() {
    console.log('App is rendering');
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle is rendering');
    return <>This is APP component</>;
}

function Rating() {
    console.log('Rating is rendering');
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    );
}

function Accordion() {
    console.log('Accordion is rendering');
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    );
}

function AccordionTitle() {
    console.log('AccordionTitle is rendering');
    return <h3>Menu</h3>;
}

function AccordionBody() {
    console.log('AccordionBody is rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

function Star() {
    console.log('Star is rendering');
    return <div>Star</div>;
}


export default App;
