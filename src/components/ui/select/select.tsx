import React from 'react';
import styles from './select.module.scss';
import { ISelectDefault } from './selectProps';
import cn from 'classnames';

export const Select: React.FC<ISelectDefault> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={cn(styles.select, className)}>
            <select {...props}>
                <option value={''} disabled selected>
                    Не выбрано
                </option>
                {children}
            </select>
        </div>
    );
};
