import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,

} satisfies Meta<typeof Navbar>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: { authData: undefined },
            counter: { value: 0 },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: undefined },
            counter: { value: 0 },
        }),
    ],
};
export const WithAuth: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: { id: '13', username: 'dsfsd' } },
            counter: { value: 0 },
        }),
    ],
};
