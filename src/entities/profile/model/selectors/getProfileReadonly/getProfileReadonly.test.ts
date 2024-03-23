import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('should return Readonly true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });
    test('should return Readonly false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toBe(false);
    });
});
