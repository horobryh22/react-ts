import React from 'react';
import {ComponentStory} from '@storybook/react';
import {UncontrolledRating} from './UncontrolledRating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'uncontrolled components/Uncontrolled Rating',
    component: UncontrolledRating,
}

const callback = action('it was changed inside component');

const Template: ComponentStory<typeof UncontrolledRating> = (props) => <UncontrolledRating {...props}/>;

export const EmptyRating = Template.bind({});
export const Rating1 = Template.bind({});
export const Rating2 = Template.bind({});
export const Rating3 = Template.bind({});
export const Rating4 = Template.bind({});
export const Rating5 = Template.bind({});

EmptyRating.args = {defaultValue: 0, onChange: callback};
Rating1.args = {defaultValue: 1, onChange: callback};
Rating2.args = {defaultValue: 2, onChange: callback};
Rating3.args = {defaultValue: 3, onChange: callback};
Rating4.args = {defaultValue: 4, onChange: callback};
Rating5.args = {defaultValue: 5, onChange: callback};