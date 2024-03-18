import { memo } from 'react';
import classNames, { Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, ThemeText } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void,
    onChangeLastName?: (value: string) => void,
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;

}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    const mods: Mods = {
        [styles.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
                <Text
                    theme={ThemeText.ERROR}
                    title={t('proizoshla-oshibka-pri-zagruzke-proifilya')}
                    text={t('poprobuite-obnovit-stranicu')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    return (
        <div className={classNames(styles.ProfileCard, mods, [className])}>
            <div className={styles.data}>
                {
                    data?.avatar && (
                        <div className={styles.avatarWrapper}>
                            <Avatar
                                src={data?.avatar}
                                alt="avatar"
                                size={200}
                            />
                        </div>

                    )
                }
                <Input
                    value={data?.first}
                    placeholder={t('vashe-imya')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeFirstName}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('vashe-familiya')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeLastName}
                />
                <Input
                    value={data?.age}
                    placeholder={t('vash-vozrast')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                    type="number"
                />
                <Input
                    value={data?.city}
                    placeholder={t('gorod')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.username}
                    placeholder={t('vvedite-imya-polzovatelya')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('vvedite-vashu-avatarku')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeCurrency}
                    value={data?.currency}
                />
                <CountrySelect
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeCountry}
                    value={data?.country}
                />
            </div>
        </div>
    );
});
