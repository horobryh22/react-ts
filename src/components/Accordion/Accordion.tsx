import React from 'react';

function Accordion(props: any) {
    console.log('Accordion is rendering');
    return (
        <>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </>
    );
}

function AccordionTitle(props: any) {
    console.log('AccordionTitle is rendering');
    return <h3>{props.title}</h3>;
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

export default Accordion