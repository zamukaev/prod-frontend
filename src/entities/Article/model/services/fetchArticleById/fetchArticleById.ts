import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThankConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thankApi) => {
        const { extra, rejectWithValue } = thankApi;
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
