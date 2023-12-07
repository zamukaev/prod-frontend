import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginUsername.test', () => {
    test('should return LoginState', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '123',
                error: undefined,
                isLoading: false,

            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'admin',
            password: '123',
            error: undefined,
            isLoading: false,

        });
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
