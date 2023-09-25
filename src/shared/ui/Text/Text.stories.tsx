import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, ThemeText } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,

} satisfies Meta<typeof Text>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Hello World',
        text: 'I am a Developer',
    },
};
export const OnlyTitle: Story = {
    args: {
        title: 'Hello World',
    },
};
export const OnlyText: Story = {
    args: {
        text: 'I am a Developer',
    },
};
export const PrimaryDark: Story = {
    args: {
        title: 'Hello World',
        text: 'I am a Developer',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const OnlyTitleDark: Story = {
    args: {
        title: 'Hello World',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const OnlyTextDark: Story = {
    args: {
        text: 'I am a Developer',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const Error: Story = {
    args: {
        text: 'I am a Developer',
        theme: ThemeText.ERROR,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
