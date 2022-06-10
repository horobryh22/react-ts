import React from 'react';
import {Clock} from './Clock';
import {ComponentStory} from '@storybook/react';


export default {
    title: 'components/Clock',
    component: Clock,
}

const Template: ComponentStory<typeof Clock> = (props) => <Clock {...props}/>;

export const ModernTimer = Template.bind({});
export const SimpleTimer = Template.bind({});

ModernTimer.args = {
    seconds: 5085,
    modernStyle: true
}

SimpleTimer.args = {
    seconds: 10000,
    modernStyle: false
}