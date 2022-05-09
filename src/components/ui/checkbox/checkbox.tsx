import React from 'react';
import { ICheckbox } from './checkboxProps';
import styles from './checkbox.module.scss';

export const Checkbox: React.FC<ICheckbox> = ({ label, value, onChange }) => {
    return (
        <label className={styles.checkbox}>
            <input type="checkbox" checked={value} onChange={onChange} />
            <span>{label}</span>
        </label>
    );
};
