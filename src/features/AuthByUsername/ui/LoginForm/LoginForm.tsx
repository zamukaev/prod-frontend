import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import classNames from 'shared/lib/classNames/classNames';

import { Text, ThemeText } from 'shared/ui/Text/Text';
import { getLoginUsername } from 'features/AuthByUsername/modal/selectors/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUsername/modal/selectors/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUsername/modal/selectors/getLoginIsloading';
import { getLoginError } from 'features/AuthByUsername/modal/selectors/getLoginError';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../modal/services/loginByUsername';
import { loginActions, loginReducer } from '../../modal/slice/loginSlice';

import styles from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}
const initialReducers: ReducerList = {
    loginForm: loginReducer,
};
const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const changeUsernameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const changePasswordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const loginClickHandler = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [onSuccess, dispatch, username, password]);

    const onKeyDown = useCallback((e: any) => {
        if (e.key === 'Enter') {
            loginClickHandler();
        }
    }, [loginClickHandler]);

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    });

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
