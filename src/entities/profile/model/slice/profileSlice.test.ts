import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    age: 36,
    city: 'Berlin',
    country: Country.Germany,
    first: 'muslim',
    lastname: 'zamukaev',
    username: 'mus',
    currency: Currency.EUR,
    avatar: 'kjhljkl',
};
describe('profileSlice.test', () => {
    const initialState: DeepPartial<ProfileSchema> = {
        error: undefined,
        isLoading: false,
    };

    test('test readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ ...state, readonly: true });
    });
    test('test readonly false', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelEdit(),
            ),
        ).toEqual({ ...state, readonly: true });
    });
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: '1234',
                }),
            ),
        ).toEqual({ form: { username: '1234' } });
    });

    test('sets isLoading true when fetchProfileData is pending', () => {
        const action = { type: fetchProfileData.pending.type };
        const state = profileReducer({
            isLoading: false,
        } as ProfileSchema, action);
        expect(state).toEqual({ isLoading: true, error: undefined });
    });

    test('sets profileData when fetchProfileData is fulfilled', () => {
        const action = { type: fetchProfileData.fulfilled.type, payload: data };
        const state = profileReducer(initialState as ProfileSchema, action);
        expect(state).toEqual({
            isLoading: false,
            data,
            form: data,
        });
    });
    test('sets error  when fetchProfileData is rejected', () => {
        const action = { type: fetchProfileData.rejected.type, payload: { error: 'some error' } };
        const state = profileReducer(initialState as ProfileSchema, action);
        expect(state).toEqual({ isLoading: false, error: { error: 'some error' } });
    });

    test('sets isLoading true when updateProfileData is pending', () => {
        const action = { type: updateProfileData.pending.type };
        const state = profileReducer({
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        } as ProfileSchema, action);
        expect(state).toEqual({ isLoading: true, error: undefined, validateError: undefined });
    });

    test('sets profileData when updateProfileData is fulfilled', () => {
        const action = { type: updateProfileData.fulfilled.type, payload: data };
        const state = profileReducer(initialState as ProfileSchema, action);
        expect(state).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateError: undefined,
        });
    });
});
