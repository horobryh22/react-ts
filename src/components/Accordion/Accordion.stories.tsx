import React, {useState} from 'react';
import {ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

const setCategory = (title: string) => {
    return (
        {
            table: {
                category: title
            }
        }
    )
}

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...setCategory('Colors')
        },
        setAccordionCollapsed: {
            ...setCategory('Events')
        },
        collapsed: {
            ...setCategory('General')
        },
        titleValue: {
            ...setCategory('General')
        }
    }
}

const callback = action('was clicked');

const Template: ComponentStory<typeof Accordion> = (props) => <Accordion {...props}/>;

export const AccordionCollapsed = Template.bind({});
export const AccordionUncollapsed = Template.bind({});
export const AccordionChanging: ComponentStory<typeof Accordion> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    return <Accordion {...args} collapsed={collapsed} setAccordionCollapsed={setCollapsed}/>
}

AccordionCollapsed.args = {
    collapsed: true,
    titleValue: 'List Users',
    items: [],
    showMeValue: (value: any) => {
        alert(value);
    },
    setAccordionCollapsed: callback
}

AccordionUncollapsed.args = {
    collapsed: false,
    titleValue: 'Menu',
    items: [
        {title: 'Dimych', value: '1'},
        {title: 'Artem', value: '2'},
        {title: 'Viktor', value: '3'},
    ],
    showMeValue: (value: any) => {
        alert(value);
    },
    setAccordionCollapsed: callback
}

AccordionChanging.args = {
    items: [
        {title: 'Dimych', value: '1'},
        {title: 'Artem', value: '2'},
        {title: 'Viktor', value: '3'},
    ],
    titleValue: 'Menu',
    color: 'red',
    showMeValue: (value: any) => {
        alert(value);
    },
}






