import {StateType} from '../components/UncontrolledAccordion/UncontrolledAccordion';
import {changeCollapsedStateAC, collapsedReducer} from './CollapsedReducer';

test('collapsed should be true', () => {
    const state: StateType = {
        collapsed: false
    }

    const newState = collapsedReducer(state, changeCollapsedStateAC(!state.collapsed));

    expect(state).not.toBe(newState);
    expect(state.collapsed).toBe(false);
    expect(newState.collapsed).toBe(true);
})

test('collapsed should be false', () => {
    const state: StateType = {
        collapsed: true
    }

    const newState = collapsedReducer(state, changeCollapsedStateAC(!state.collapsed));

    expect(state).not.toBe(newState);
    expect(state.collapsed).toBe(true);
    expect(newState.collapsed).toBe(false);
})
