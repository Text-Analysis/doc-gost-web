import React from 'react';
import { IText } from './textProps';
import styles from './text.module.scss';

export const Text: React.FC<IText> = ({ type, children, ...props }) => {
    switch (type) {
        case 'h1':
            return (
                <h1 {...props} className={styles.h1}>
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2 {...props} className={styles.h2}>
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3 {...props} className={styles.h3}>
                    {children}
                </h3>
            );
        case 'description':
            return (
                <span {...props} className={styles.span}>
                    {children}
                </span>
            );
        default:
            return (
                <p {...props} className={styles.p}>
                    {children}
                </p>
            );
    }
};
