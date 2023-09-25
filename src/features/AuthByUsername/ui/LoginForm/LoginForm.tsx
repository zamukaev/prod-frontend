import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classNames from 'shared/lib/classNames/classNames';

import { useAppDispatch } from 'shared/lib/useAppDispatch/useAppDispatch';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../modal/services/loginByUsername';
import { loginActions } from '../../modal/slice/loginSlice';
import { getLoginState } from '../../modal/selectors/getLoginState';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const {
        password, username, error, isLoading,
    } = useSelector(getLoginState);

    const changeUsernameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const changePasswordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const loginClickHandler = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} theme={ThemeText.ERROR} />}
            <Input
                onChange={changeUsernameHandler}
                autofocus
                placeholder={t('Ведите username')}
                type="text"
                className={styles.input}
                value={username}

            />
            <Input
                onChange={changePasswordHandler}
                placeholder={t('Ведите пароль')}
                type="text"
                className={styles.input}
                value={password}
            />
            <Button
                onClick={loginClickHandler}
                className={styles.loginBtn}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
