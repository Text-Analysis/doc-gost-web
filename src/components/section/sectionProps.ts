import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ISection
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: React.ReactNode;
    title: string;
    text?: string;
}
