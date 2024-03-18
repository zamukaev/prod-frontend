import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,

} satisfies Meta<typeof Avatar>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 100,
        alt: 'image',
        src: 'https://cdn3d.iconscout.com/3d/premium/thumb/programmer-9440401-7675299.png',
    },
};

export const Secondary: Story = {
    args: {
        size: 50,
        alt: 'image',
        src: 'https://cdn3d.iconscout.com/3d/premium/thumb/programmer-9440401-7675299.png',
    },
};
