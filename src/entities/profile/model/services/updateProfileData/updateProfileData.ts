import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileFrom } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProdileDate';

export const updateProfileData = createAsyncThunk<Profile, void, ThankConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thankApi) => {
        const { extra, rejectWithValue, getState } = thankApi;
        const formData = getProfileFrom(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
