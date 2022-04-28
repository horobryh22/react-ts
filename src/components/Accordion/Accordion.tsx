import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}

function Accordion({titleValue, setAccordionCollapsed, collapsed}: AccordionPropsType) {
    console.log('Accordion is rendering');

    return (
        <>
            <AccordionTitle title={titleValue} callback={() => setAccordionCollapsed(!collapsed)}/>
            {/*{!collapsed && <AccordionBody/>}*/}
            {(collapsed) ? '' : <AccordionBody/>}
        </>
    );

}

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

function AccordionTitle({title, callback}: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering');
    return <h3 onClick={callback}>{title}</h3>;
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