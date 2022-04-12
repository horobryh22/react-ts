import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
}

export const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = ({titleValue}) => {

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const onClickButtonHandler = () => {
        setCollapsed(!collapsed);
    }

    return (
        <>
            <AccordionTitle title={titleValue}/>
            <button onClick={onClickButtonHandler}>toggle</button>
            {!collapsed && <AccordionBody/>}
        </>
    );

}

function AccordionTitle({title}: AccordionTitlePropsType) {
    return <h3>{title}</h3>;
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
