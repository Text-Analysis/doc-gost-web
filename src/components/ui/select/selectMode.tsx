import React from 'react';
import { ISelectMode } from './selectProps';
import { Select } from './select';

export const SelectMode: React.FC<ISelectMode> = ({ data, ...props }) => (
    <Select {...props}>
        {data.map((item) => (
            <option key={item.mode} value={item.mode}>
                {item.title}
            </option>
        ))}
    </Select>
);
