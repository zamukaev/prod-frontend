import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import {
    ProfileCard,
    fetchProfileData,
    profileReducer,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    getProfileFrom,
    getProfileValidateErrors,
    ValidateProfileError,
} from 'entities/profile';

import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { Currency } from 'entities/Currency';
import classNames from 'shared/lib/classNames/classNames';
import { Country } from 'entities/Country';
import { ThemeText, Text } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string;
}

const reducer: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const fromData = useSelector(getProfileFrom);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const { t } = useTranslation('profile');

    const validateErrorsTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и Фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некоректный возраст'),
        [ValidateProfileError.INCORRECT_CITY]: t('Некоректный Город'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некоректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
    };

    const onChangeFirstName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);
    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);
    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />

                {validateErrors?.length && validateErrors.map((error) => (
                    <Text key={error} theme={ThemeText.ERROR} text={validateErrorsTranslates[error]} />
                ))}

                <ProfileCard
                    data={fromData}
                    error={error}
                    isLoading={isLoading}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default memo(ProfilePage);
