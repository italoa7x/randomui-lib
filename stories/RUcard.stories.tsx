import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { RUcard } from '../src/components/RUcard'

export default {
    title: 'components/Cards',
    component: RUcard,
} as ComponentMeta<typeof RUcard>;

export const Card = () => {
    return (<RUcard>
        <h1>Olá, eu sou um card</h1>
    </RUcard>)
}