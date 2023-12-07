import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '12345' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('12345'),
            ),
        ).toEqual({ username: '12345' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123456' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('123456'),
            ),
        ).toEqual({ password: '123456' });
    });
});
