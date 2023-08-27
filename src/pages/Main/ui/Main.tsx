import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

const Main: FC = () => {
    const { t } = useTranslation('main');
    const [error, setError] = useState(false);

    const errorThow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <div>
            {t('Главная страница')}
            <Button onClick={errorThow}>{t('Throw error')}</Button>
        </div>
    );
};

export default Main;
