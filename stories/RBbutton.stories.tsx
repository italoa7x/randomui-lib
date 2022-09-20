import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RUbutton } from '../src/components/RUbutton';


export default {
    title: 'Components/RUbutton',
    component: RUbutton
} as ComponentMeta<typeof RUbutton>

const Template: ComponentStory<typeof RUbutton> = () => <RUbutton />
export const Primary = Template.bind({})