import React from 'react';
import { ISelectSetting } from './selectProps';
import { Select } from './select';

export const SelectSetting: React.FC<ISelectSetting> = ({ data, ...props }) => (
    <Select {...props}>
        {data.map((item) => (
            <option key={item.mode} value={item.mode}>
                {item.title}
            </option>
        ))}
    </Select>
);
