import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from '../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThankConfig<string>>(
    'login/fetchProfileData',
    async (_, thankApi) => {
        const { extra, rejectWithValue } = thankApi;
        try {
            const response = await extra.api.get<Profile>('/profile');
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
