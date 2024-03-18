import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country, CountrySelect } from 'entities/Country';

const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,

} satisfies Meta<typeof CountrySelect>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Readonly: Story = {
    args: {
        value: Country.Germany,
        readonly: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const Primary: Story = {
    args: {
        value: Country.Russia,
        readonly: false,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};
