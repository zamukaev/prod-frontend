import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency/model/types/currency';
import avatar from 'shared/assets/tests/avatar.jpg';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    age: 36,
                    city: 'Berlin',
                    country: Country.Germany,
                    first: 'muslim',
                    lastname: 'zamukaev',
                    username: 'mus',
                },
            },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    age: 36,
                    city: 'Berlin',
                    country: Country.Germany,
                    first: 'muslim',
                    lastname: 'zamukaev',
                    username: 'mus',
                    currency: Currency.EUR,
                    avatar,
                },
            },
        }),
    ],
};
