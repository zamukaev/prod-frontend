import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,

} satisfies Meta<typeof Button>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Button',
    },
};
export const ClearInverted: Story = {
    args: {
        theme: ThemeButton.CLEARINVERTED,
        children: 'Button',
    },
};
export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
    },
};
export const OutlineSizeL: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
        size: ButtonSize.L,
    },
};
export const OutlineSizeXL: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
        size: ButtonSize.XL,
    },
};
export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const BackgroundTheme: Story = {
    args: {
        theme: ThemeButton.BACKGROUND,
        children: 'Button',
    },
};
export const BackgroundInverted: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: 'Button',
    },
};
export const Square: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: '>',
    },
};
