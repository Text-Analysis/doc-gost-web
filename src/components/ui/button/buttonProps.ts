import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IButton
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    colorBtn: 'green' | 'blue';
    disable?: boolean;
}
