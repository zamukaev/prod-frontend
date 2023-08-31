import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles['lds-ellipsis'], {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
