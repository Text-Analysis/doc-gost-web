import React from 'react';
import { ISelectSection } from './selectProps';
import { Select } from './select';

export const SelectSection: React.FC<ISelectSection> = ({
    data,
    defaultOption,
    ...props
}) => (
    <Select {...props} defaultOption={defaultOption}>
        {data.map((item) => (
            <option key={item} value={item}>
                {item}
            </option>
        ))}
    </Select>
);
