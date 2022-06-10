import React from 'react';
import {AnalogClock} from './AnalogClock';
import {ComponentStory} from '@storybook/react';


export default {
    title: 'components/AnalogClock',
    component: AnalogClock,
}

const Template: ComponentStory<typeof AnalogClock> = (props) => <AnalogClock {...props}/>;

export const BaseAnalogExample = Template.bind({});
export const BaseDigitalExample = Template.bind({});

BaseAnalogExample.args = {
    mode: 'analog'
}

BaseDigitalExample.args = {
    mode: 'digital'
}