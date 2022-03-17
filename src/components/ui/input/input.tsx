import React from 'react';
import styles from './input.module.scss';
import cn from 'classnames';
import { IInput } from '../../../types/components';

export const Input: React.FC<IInput> = ({ type, isError, ...props }) => {
    const getInput = () => {
        switch (type) {
            case 'file': {
                return (
                    <label className={styles.inputLabel}>
                        <input
                            type={type}
                            className={cn({ [styles.error]: isError })}
                            {...props}
                        />
                        <span className="btn btn-primary">Выберите файл</span>
                    </label>
                );
            }
            default: {
                return (
                    <input
                        className={cn(styles.input, {
                            [styles.error]: isError,
                        })}
                        {...props}
                    />
                );
            }
        }
    };
    return getInput();
};
