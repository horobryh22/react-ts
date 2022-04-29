import React from 'react';

type AccordionPropsType = {
    /**
     * title our Accordion
     */
    titleValue: string
    /**
     * Param that says us Accordion is collapsed or not
     */
    collapsed: boolean
    /**
     * callback that change our param collapsed
     */
    setAccordionCollapsed: (collapsed: boolean) => void
    /**
     * color of header text
     */
    color?:string
}

function Accordion({titleValue, setAccordionCollapsed, collapsed, color}: AccordionPropsType) {
    console.log('Accordion is rendering');

    return (
        <>
            <AccordionTitle title={titleValue} color={color} callback={() => setAccordionCollapsed(!collapsed)}/>
            {(collapsed) ? '' : <AccordionBody/>}
        </>
    );

}

type AccordionTitlePropsType = {
    title: string
    callback: () => void
    color?: string
}

function AccordionTitle({title, callback, color}: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering');
    return <h3 style={{color: color}} onClick={callback}>{title}</h3>;
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