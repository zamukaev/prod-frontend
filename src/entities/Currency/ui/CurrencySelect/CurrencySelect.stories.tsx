import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency, CurrencySelect } from 'entities/Currency';

const meta = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,

} satisfies Meta<typeof CurrencySelect>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Readonly: Story = {
    args: {
        value: Currency.EUR,
        readonly: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const Primary: Story = {
    args: {
        value: Currency.EUR,
        readonly: false,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};
