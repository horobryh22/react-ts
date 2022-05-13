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

const AccordionSecret: React.FC<AccordionPropsType> = ({
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

const Accordion = React.memo(AccordionSecret);

type AccordionTitlePropsType = {
    title: string
    callback: () => void
    color?: string
}

const AccordionTitleSecret =({title, callback, color}: AccordionTitlePropsType) => {
    console.log('AccordionTitle is rendering');
    return <h3 style={{color: color}} onClick={callback}>{title}</h3>;
}

const AccordionTitle = React.memo(AccordionTitleSecret);

export type AccordionBodyPropsType = {
    items: Array<{ title: string, value: any }>
    onClick: (value: any) => void
}


const AccordionBodySecret: React.FC<AccordionBodyPropsType> = ({items, onClick}) => {
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

const AccordionBody = React.memo(AccordionBodySecret)

export default Accordion