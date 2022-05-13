import React from 'react';
import styles from './select.module.scss';
import { ISelectDefault } from './selectProps';
import cn from 'classnames';

export const Select: React.FC<ISelectDefault> = ({
    children,
    className,
    disabled,
    isError,
    defaultOption,
    ...props
}) => {
    return (
        <div className={cn(styles.select, className)}>
            <select
                {...props}
                disabled={disabled}
                className={cn({
                    [styles.error]: isError,
                })}
            >
                <option value="" disabled selected>
                    {defaultOption ? defaultOption : 'Выберите сущность'}
                </option>
                {children}
            </select>
        </div>
    );
};
