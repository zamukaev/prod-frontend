import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,

} satisfies Meta<typeof Modal>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim consectetur aperiam voluptate modi nesciunt hic distinctio facere porro illo assumenda, deserunt odit earum eligendi corrupti voluptas doloremque deleniti, minima ex?',
    isOpen: true,
  },
};

export const ModalDark: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim consectetur aperiam voluptate modi nesciunt hic distinctio facere porro illo assumenda, deserunt odit earum eligendi corrupti voluptas doloremque deleniti, minima ex?',
    isOpen: true,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
