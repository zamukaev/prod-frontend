import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/profile/model/selectors/getProfileError/getProfileError';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title={t('Профиль ')}></Text>
                <Button
                    className={styles.editBtn}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={styles.input}

                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше фамилия')}
                    className={styles.input}
                />
            </div>
        </div>
    );
};
