import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Rating, {RatingValueType} from './Rating';
import {action} from '@storybook/addon-actions';

const callback = () => {
};

export default {
    title: 'components/Rating',
    component: Rating,
}

const Template: ComponentStory<typeof Rating> = (props) => <Rating {...props} />;
const callbacksProps = {
    setRatingValue: callback
}


export const EmptyRating = Template.bind({});
export const Rating1 = Template.bind({});
export const Rating2 = Template.bind({});
export const Rating3 = Template.bind({});
export const Rating4 = Template.bind({});
export const Rating5 = Template.bind({});
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5);

    return <Rating value={rating} setRatingValue={setRating}/>
}

EmptyRating.args = {...callbacksProps, value: 0,};
Rating1.args = {...callbacksProps, value: 1,};
Rating2.args = {...callbacksProps, value: 2,};
Rating3.args = {...callbacksProps, value: 3,};
Rating4.args = {...callbacksProps, value: 4,};
Rating5.args = {...callbacksProps, value: 5,};





