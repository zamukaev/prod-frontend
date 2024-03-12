import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername';

describe('loginSlice.test', () => {
    const initialState: DeepPartial<LoginSchema> = { isLoading: false, error: undefined };

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

    test('sets isLoading true when loginByUsername is pending', () => {
        const action = { type: loginByUsername.pending.type };
        const state = loginReducer(initialState as LoginSchema, action);
        expect(state).toEqual({ isLoading: true, error: undefined });
    });
    test('sets isLoading true when loginByUsername is pending', () => {
        const action = { type: loginByUsername.pending.type };
        const state = loginReducer(initialState as LoginSchema, action);
        expect(state).toEqual({ isLoading: true, error: undefined });
    });
    test('sets error  when loginByUsername is rejected', () => {
        const action = { type: loginByUsername.rejected.type, payload: { error: 'some error' } };
        const state = loginReducer(initialState as LoginSchema, action);
        expect(state).toEqual({ isLoading: false, error: { error: 'some error' } });
    });
});
