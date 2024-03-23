import { StateSchema } from 'app/providers/StoreProvider';

import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should return ProfileIsLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });
    test('should return ProfileIsLoading false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });
});
