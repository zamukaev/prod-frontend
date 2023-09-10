import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input/Input';

const Main: FC = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const changeHandler = (val: string) => {
        setValue(val);
    };
    return (
        <div>
            {t('Главная страница')}
            <Input value={value} placeholder="name" onChange={changeHandler} />
        </div>
    );
};

export default Main;
