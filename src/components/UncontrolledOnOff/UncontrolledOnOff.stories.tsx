import React from 'react';
import {ComponentStory} from '@storybook/react';
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
    title: 'uncontrolled components/Uncontrolled On Off',
    component: UncontrolledOnOff,
}

const Template: ComponentStory<typeof UncontrolledOnOff> = (props) => <UncontrolledOnOff {...props}/>;

export const UncontrolledOnMode = Template.bind({});
export const UncontrolledOffMode = Template.bind({});

UncontrolledOnMode.args = {
    defaultOn: true
}

UncontrolledOffMode.args = {
    defaultOn: false
}








