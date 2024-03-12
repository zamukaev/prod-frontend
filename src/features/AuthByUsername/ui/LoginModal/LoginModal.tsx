import { FC, Suspense, useEffect } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import classNames from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;

    useEffect(() => {

    }, [isOpen]);

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
