import React from 'react';
import styles from './select.module.scss';
import { ISelectDefault } from './selectProps';
import cn from 'classnames';

export const Select: React.FC<ISelectDefault> = ({
    children,
    className,
    disabled,
    isError,
    ...props
}) => {
    return (
        <div className={cn(styles.select, className)}>
            <select
                {...props}
                disabled={disabled}
                className={cn({
                    [styles.disabled]: disabled,
                    [styles.error]: isError,
                })}
            >
                <option value={''} disabled selected>
                    Не выбрано
                </option>
                {children}
            </select>
        </div>
    );
};
