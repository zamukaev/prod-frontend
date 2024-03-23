import axios from 'axios';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import { validateProfileData } from './validateProdileDate';
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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('incorrect user data', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: 0 });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('incorrect city', async () => {
        const result = validateProfileData({ ...data, city: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });
    test('no data', async () => {
        const result = validateProfileData();
        expect(result).toEqual([
            ValidateProfileError.NO_DATA,
        ]);
    });
});
