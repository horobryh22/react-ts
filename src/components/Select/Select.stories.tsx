import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {Select} from './Select';

export default {
    title: 'components/Select',
    component: Select,
}

const Template: ComponentStory<typeof Select> = (props) => <Select {...props}/>;

export const NotChangingSelect = Template.bind({});
export const ChangingSelect: ComponentStory<typeof Select> = (args) => {
    const [valueSelect, setValueSelect] = useState<string | null>('2');

    return <Select {...args} value={valueSelect} changeTitle={setValueSelect}/>
}

NotChangingSelect.args = {
    value: null,
    changeTitle: () => {alert('I want to change')},
    options: [
        {title: 'First', value: '1'},
        {title: 'Second', value: '2'},
        {title: 'Third', value: '3'},
        {title: 'Fourth', value: '4'},
    ]
}

ChangingSelect.args = {
    options: [
        {title: 'First', value: '1'},
        {title: 'Second', value: '2'},
        {title: 'Third', value: '3'},
        {title: 'Fourth', value: '4'},
    ]
}



