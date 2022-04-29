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
    return <Accordion {...args}  collapsed={collapsed} setAccordionCollapsed={setCollapsed}/>
}

AccordionCollapsed.args = {
    collapsed: true,
    titleValue: 'List Users',
    setAccordionCollapsed: callback
}

AccordionUncollapsed.args = {
    collapsed: false,
    titleValue: 'Menu',
    setAccordionCollapsed: callback
}

AccordionChanging.args = {
    titleValue: 'Menu',
    color: 'red'
}





