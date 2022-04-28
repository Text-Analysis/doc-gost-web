import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ILayoutDefault
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sectionName: string;
    children: React.ReactNode;
}
