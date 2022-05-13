import React, { useRef } from 'react';
import styles from './input.module.scss';
import cn from 'classnames';
import { IInput } from './inputProps';

export const Input: React.FC<IInput> = ({ type, isError, ...props }) => {
    const inputFileRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const getStatusInputFile = () => {
        if (
            inputFileRef.current &&
            inputFileRef.current.files &&
            inputFileRef.current.files.length
        ) {
            return <span>Файл выбран</span>;
        }
        return <span className={styles.textChoose}>Выберите файл</span>;
    };

    const getInput = () => {
        switch (type) {
            case 'file': {
                return (
                    <label
                        className={cn(styles.inputLabel, {
                            [styles.error]: isError,
                        })}
                    >
                        <input
                            type={type}
                            ref={inputFileRef}
                            className={cn({ [styles.error]: isError })}
                            {...props}
                        />
                        {getStatusInputFile()}
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
