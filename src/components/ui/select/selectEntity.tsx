import React from 'react';
import { Select } from './select';
import { ISelectEntity } from './selectProps';

export const SelectEntity: React.FC<ISelectEntity> = ({
    data,
    defaultOption,
    ...props
}) => {
    return (
        <Select {...props} defaultOption={defaultOption}>
            {data.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.name}
                </option>
            ))}
        </Select>
    );
};
