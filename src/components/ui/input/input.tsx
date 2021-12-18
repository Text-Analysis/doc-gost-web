import React from 'react';
import styles from './input.module.scss';
import cn from 'classnames';
import { IInput } from '../../../types/components';

export const Input: React.FC<IInput> = ({ isError, ...props }) => {
    return (
        <input
            className={cn(styles.input, { [styles.error]: isError })}
            {...props}
        />
    );
};
