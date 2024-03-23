import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileReadonly.test', () => {
    test('should return ValidateProfileError true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.INCORRECT_CITY,
                ],

            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });
    test('should return empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
