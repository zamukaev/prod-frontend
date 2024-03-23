import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,

} satisfies Meta<typeof Sidebar>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};
export const NoAuth: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {},
        }),
    ],
};
