import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThank();
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThank();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
