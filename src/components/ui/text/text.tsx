import React from 'react';
import { IText } from './textProps';
import styles from './text.module.scss';
import cn from 'classnames';

export const Text: React.FC<IText> = ({
    type,
    children,
    className,
    ...props
}) => {
    switch (type) {
        case 'h1':
            return (
                <h1 {...props} className={cn(styles.h1, className)}>
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2 {...props} className={cn(styles.h2, className)}>
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3 {...props} className={cn(styles.h3, className)}>
                    {children}
                </h3>
            );
        case 'description':
            return (
                <span {...props} className={cn(styles.span, className)}>
                    {children}
                </span>
            );
        default:
            return (
                <p {...props} className={cn(styles.p, className)}>
                    {children}
                </p>
            );
    }
};
