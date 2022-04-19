import React from 'react';
import './text.module.scss';
import { IText } from './textProps';

export const Text: React.FC<IText> = ({ type, children, ...props }) => {
    switch (type) {
        case 'h1':
            return <h1 {...props}>{children}</h1>;
        case 'h2':
            return <h2 {...props}>{children}</h2>;
        case 'h3':
            return <h3 {...props}>{children}</h3>;
        case 'description':
            return <span {...props}>{children}</span>;
        default:
            return <p {...props}>{children}</p>;
    }
};
