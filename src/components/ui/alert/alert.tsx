import React from 'react';
import styles from './alert.module.scss';
import cn from 'classnames';
import { IAlert } from './alertProps';

export const Alert: React.FC<IAlert> = ({
    visible,
    children,
    className,
    isError,
    ...props
}) => {
    if (!visible) {
        return null;
    }
    return (
        <div
            className={cn(className, styles.alert, {
                [styles.success]: !isError,
                [styles.error]: isError,
            })}
            {...props}
        >
            {children}
        </div>
    );
};
