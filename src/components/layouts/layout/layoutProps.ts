import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ILayout
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sectionName: string;
    children: React.ReactNode;
}
