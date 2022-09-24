import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { RUtag } from '../src/components/RUtag'

export default {
    title: 'Components/Tags',
    component: RUtag

} as ComponentMeta<typeof Tag>


const Template: ComponentStory<typeof RUtag> = (args) => <RUtag {...args}>
    Olá eu sou uma tag
</RUtag>

export const Tag = Template.bind({})