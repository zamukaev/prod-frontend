import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/profile';

import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = () => {
        dispatch(updateProfileData());
    };

    return (
        <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
            <Text title={t('profil')} />
            {
                readonly ? (
                    <Button
                        className={styles.editBtn}
                        theme={ThemeButton.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('redaktirovat')}
                    </Button>
                )
                    : (
                        <>

                            <Button
                                className={styles.editBtn}
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t('otmenit')}
                            </Button>
                            <Button
                                className={styles.saveBtn}
                                theme={ThemeButton.OUTLINE}
                                onClick={onSave}
                            >
                                {t('sokhranit')}
                            </Button>
                        </>
                    )
            }
        </div>
    );
});
