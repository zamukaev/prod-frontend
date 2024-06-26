import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        age,
        first,
        lastname,
        username,
        city,
        country,
    } = profile;

    const errors: ValidateProfileError[] = [];
    if (!first || !lastname || !username) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
