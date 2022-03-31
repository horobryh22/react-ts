import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion({titleValue, collapsed}: AccordionPropsType) {
    console.log('Accordion is rendering');
    if (collapsed) {
        return (
            <>
                <AccordionTitle title={titleValue}/>
            </>
        )
    } else {
        return (
            <>
                <AccordionTitle title={titleValue}/>
                <AccordionBody/>
            </>
        );
    }
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle({title}: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering');
    return <h3>{title}</h3>;
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