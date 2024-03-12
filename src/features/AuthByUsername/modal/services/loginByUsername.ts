import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThankConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from 'entities/User';
import i18n from 'i18next';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThankConfig<string>>(
    'login/loginByUsername',
    async (authData, thankApi) => {
        const { extra, dispatch, rejectWithValue } = thankApi;
        try {
            const response = await extra.api.post<User>('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
        }
    },
);
