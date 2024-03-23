import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileFrom } from './getProfileForm';

describe('getProfileFrom.test', () => {
    test('should return ProfileFormData', () => {
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

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileFrom(state as StateSchema)).toEqual(data);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = { profile: {} };
        expect(getProfileFrom(state as StateSchema)).toEqual(undefined);
    });
});
