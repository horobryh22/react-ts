import {StateType} from '../components/UncontrolledAccordion/UncontrolledAccordion';

export type ActionType = ReturnType<typeof changeCollapsedStateAC>

export const collapsedReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'CHANGE-COLLAPSED-STATE': {
            return {...state, collapsed: action.payload.collapsedState};
        }
        default: {
            return state;
        }
    }
}

export const changeCollapsedStateAC = (collapsedState: boolean) => {
    return {
        type: 'CHANGE-COLLAPSED-STATE',
        payload: {
            collapsedState
        }
    } as const
}