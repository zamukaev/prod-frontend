import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,

} satisfies Meta<typeof Skeleton>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};
export const PrimaryDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const Circle: Story = {
    args: {
        width: 100,
        height: 100,
        border: '100%',
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};
export const CircleDark: Story = {
    args: {
        width: 100,
        height: 100,
        border: '100%',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
