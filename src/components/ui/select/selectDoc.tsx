import React from 'react';
import { Select } from './select';
import { ISelectDoc } from './selectProps';

export const SelectDoc: React.FC<ISelectDoc> = ({ data, ...props }) => (
    <Select {...props}>
        {data.map((item) => (
            <option key={item.id} value={item.id}>
                {item.documentName}
            </option>
        ))}
    </Select>
);
