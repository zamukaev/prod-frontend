import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetails } from './ArticleDetails';

const meta = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,

} satisfies Meta<typeof ArticleDetails>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: '1',
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            articleDetails: {
                data: {

                },
            },
        }),
    ],
};
