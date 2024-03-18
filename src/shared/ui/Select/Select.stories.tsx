import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,

} satisfies Meta<typeof Select>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Выберите валюту',
        options: [
            { value: Currency.EUR, content: Currency.EUR },
            { value: Currency.RUB, content: Currency.RUB },
            { value: Currency.USD, content: Currency.USD },
        ],
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const Secondary: Story = {
    args: {
        label: 'Выберите валюту',
        options: [
            { value: Currency.EUR, content: Currency.EUR },
            { value: Currency.RUB, content: Currency.RUB },
            { value: Currency.USD, content: Currency.USD },
        ],
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};
