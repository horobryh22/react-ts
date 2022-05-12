import React, {useReducer} from 'react';
import {ActionType, changeCollapsedStateAC, collapsedReducer} from '../../reducers/CollapsedReducer';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    onClickHandler: () => void
}

export type StateType = {
    collapsed: boolean
}

export const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = ({titleValue}) => {

    const [state, stateDispatch] = useReducer<(state: StateType, action: ActionType) => StateType>(collapsedReducer, {
        collapsed: true
    });

    const onClickHandler = () => {
        stateDispatch(changeCollapsedStateAC(!state.collapsed));
    }

    return (
        <>
            <AccordionTitle title={titleValue} onClickHandler={onClickHandler}/>
            {!state.collapsed && <AccordionBody/>}
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
