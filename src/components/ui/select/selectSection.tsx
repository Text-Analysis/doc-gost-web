import React from 'react';
import { ISelectSection } from './selectProps';
import { Select } from './select';

export const SelectSection: React.FC<ISelectSection> = ({ data, ...props }) => (
    <Select {...props}>
        {data.map((item) => (
            <option key={item} value={item}>
                {item}
            </option>
        ))}
    </Select>
);
