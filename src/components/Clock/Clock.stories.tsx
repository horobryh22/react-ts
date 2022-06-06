import React from 'react';
import {Clock} from './Clock';
import {ComponentStory} from '@storybook/react';


export default {
    title: 'components/Clock',
    component: Clock,
}

const Template: ComponentStory<typeof Clock> = (props) => <Clock {...props}/>;

export const Timer = Template.bind({});

Timer.args = {
    seconds: 5085
}