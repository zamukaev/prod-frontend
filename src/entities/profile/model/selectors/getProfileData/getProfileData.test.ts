import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return ProfileData', () => {
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
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = { profile: {} };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
