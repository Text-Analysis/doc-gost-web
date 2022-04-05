import React from 'react';
import { ISelectSetting } from './selectProps';
import { Select } from './select';

export const SelectSetting: React.FC<ISelectSetting> = ({ data, ...props }) => (
    <Select {...props}>
        {data.map((item) => (
            <option key={item} value={item}>
                {item}
            </option>
        ))}
    </Select>
);
