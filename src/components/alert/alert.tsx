import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './alert.module.scss';
import cn from 'classnames';

interface IAlert
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    state?: 'success' | 'error';
    visible: boolean;
}

export const Alert: React.FC<IAlert> = ({
    visible,
    children,
    className,
    state,
    ...props
}) => {
    return (
        <div
            className={cn(className, styles.alert, {
                [styles.success]: state === 'success',
                [styles.error]: state === 'error',
                [styles.alertActive]: visible,
            })}
            {...props}
        >
            {children}
        </div>
    );
};
