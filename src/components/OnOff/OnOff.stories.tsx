import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'components/On Off',
    component: OnOff,
}

const callback = action('on or off was clicked');

const Template: ComponentStory<typeof OnOff> = (props) => <OnOff {...props}/>;

export const StateOn = Template.bind({});
export const StateOff = Template.bind({});
export const StateChanging = () => {
    const [isOn, setIsOn] = useState<boolean>(true);

    return <OnOff on={isOn} setOn={setIsOn}/>
};


StateOn.args = {on: true, setOn: callback};
StateOff.args = {on: false, setOn: callback};







