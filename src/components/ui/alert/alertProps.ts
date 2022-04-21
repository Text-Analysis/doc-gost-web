import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IAlert
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    isError: boolean;
    visible: boolean;
}
