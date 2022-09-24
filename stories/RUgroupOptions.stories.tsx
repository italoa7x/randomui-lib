import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RUoptionGrupoProps, RUoptionsGroup } from '../src/components/RUoptionsGroup';

export default {
    title: 'Components/Groups',
    component: RUoptionsGroup
} as ComponentMeta<typeof RUoptionsGroup>


const Template: ComponentStory<typeof RUoptionsGroup> = () => <RUoptionsGroup />

export const Default = Template.bind({})

Default.args = {} 
