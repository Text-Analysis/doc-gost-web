import React from 'react';
import { ISelectMode } from './selectProps';
import { Select } from './select';

export const SelectMode: React.FC<ISelectMode> = ({
    data,
    defaultOption,
    ...props
}) => (
    <Select {...props} defaultOption={defaultOption}>
        {data.map((item) => (
            <option key={item.mode} value={item.mode}>
                {item.title}
            </option>
        ))}
    </Select>
);
