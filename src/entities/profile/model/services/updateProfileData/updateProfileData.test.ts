import axios from 'axios';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

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

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: data,
                },
            },
        );
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThank();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: data,
                },
            },
        );
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThank();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
    test('validate error', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: { ...data, first: '' },
                },
            },
        );
        const result = await thunk.callThank();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
