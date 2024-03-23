import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.jpg';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,

} satisfies Meta<typeof ProfileCard>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
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

};
export const WithError: Story = {
    args: {
        error: 'error',
    },

};
export const Loading: Story = {
    args: {
        isLoading: true,
    },

};
