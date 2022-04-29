import React from 'react';
import {ComponentStory} from '@storybook/react';
import {UncontrolledAccordion} from './UncontrolledAccordion';

export default {
    title: 'uncontrolled components/Uncontrolled Accordion',
    component: UncontrolledAccordion,
}

const Template: ComponentStory<typeof UncontrolledAccordion> = (props) => <UncontrolledAccordion {...props}/>;

export const UncontrolledAccordionMode = Template.bind({});

UncontrolledAccordionMode.args = {
    titleValue: 'Menu'
}





