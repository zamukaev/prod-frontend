import { FC, useEffect, useState } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import classNames from 'shared/lib/classNames/classNames';
import { LoginForm } from '../LoginForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
};
