import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    onClickHandler: () => void
}

export const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = ({titleValue}) => {

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const onClickHandler = () => {
        setCollapsed(!collapsed);
    }

    return (
        <>
            <AccordionTitle title={titleValue} onClickHandler={onClickHandler}/>
            {!collapsed && <AccordionBody/>}
        </>
    );

}

function AccordionTitle({title, onClickHandler}: AccordionTitlePropsType) {
    return <h3 onClick={onClickHandler}>{title}</h3>;
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
