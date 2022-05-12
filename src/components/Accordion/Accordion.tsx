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
    color?: string
    items: Array<{ title: string, value: any }>
    showMeValue: (value: any) => void
}

const Accordion: React.FC<AccordionPropsType> = ({
                                                     titleValue,
                                                     setAccordionCollapsed,
                                                     collapsed,
                                                     color,
                                                     items,
                                                     showMeValue
                                                 }) => {
    console.log('Accordion is rendering');

    return (
        <>
            <AccordionTitle title={titleValue} color={color} callback={() => setAccordionCollapsed(!collapsed)}/>
            {(collapsed) ? '' : <AccordionBody items={items} onClick={showMeValue}/>}
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

export type AccordionBodyPropsType = {
    items: Array<{ title: string, value: any }>
    onClick: (value: any) => void
}

const AccordionBody: React.FC<AccordionBodyPropsType> = ({items, onClick}) => {
    console.log('AccordionBody is rendering');

    return (
        <ul>
            {items.map((i, index) => {

                const onClickHandler = () => {
                    onClick(i.value);
                }

                return <li onClick={onClickHandler} key={index}>{i.title}</li>
            })}
        </ul>
    );
}

export default Accordion