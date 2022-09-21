import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RUbutton, RUbuttonProps } from '../src/components/RUbutton';


export default {
    title: 'Components/Buttons',
    component: RUbutton
} as ComponentMeta<typeof RUbutton>


const Template: ComponentStory<typeof RUbutton> = (args) => <RUbutton {...args} />

export const Primary = Template.bind({})

Primary.args = {
    type: 'primary',
    label: 'RU button primary',

} as RUbuttonProps


export const Secondary = Template.bind({})

Secondary.args = {
    type: 'secondary',
    label: 'RU button secondary',

} as RUbuttonProps
