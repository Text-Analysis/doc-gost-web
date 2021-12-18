import React from 'react';
import styles from './select.module.scss';
import cn from 'classnames';
import { ISelect } from '../../../types/components';

export const Select: React.FC<ISelect> = ({ data, className, ...props }) => {
    return (
        <div className={styles.select}>
            <select
                className={cn(className)}
                {...props}
                placeholder={'Выберите документ'}
            >
                <option value={''} disabled selected>
                    Выберите документ
                </option>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.documentName}
                    </option>
                ))}
            </select>
        </div>
    );
};
