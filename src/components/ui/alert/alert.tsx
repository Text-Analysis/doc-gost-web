import React from 'react';
import styles from './alert.module.scss';
import cn from 'classnames';
import { IAlert } from '../../../types/components';

export const Alert: React.FC<IAlert> = ({
    visible,
    children,
    className,
    isError,
    ...props
}) => {
    return (
        <div
            className={cn(className, styles.alert, {
                [styles.success]: !isError,
                [styles.error]: isError,
                [styles.alertActive]: visible,
            })}
            {...props}
        >
            {children}
        </div>
    );
};
