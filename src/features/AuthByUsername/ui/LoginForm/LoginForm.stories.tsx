import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,

} satisfies Meta<typeof LoginForm>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const LoginFormLight: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                password: '123',
                username: 'admin',
                error: '',
                isLoading: false,
            },
        }),
    ],
};
export const LoginFormWithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                password: '123',
                username: 'admin',
                error: 'error',
                isLoading: false,
            },
        }),
    ],
};
export const LoginFormLoading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {
                password: '123',
                username: 'admin',
                error: '',
                isLoading: true,
            },
        }),
    ],
};
