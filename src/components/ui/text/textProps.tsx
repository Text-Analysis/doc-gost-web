import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IText
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
        HTMLHeadingElement | HTMLParagraphElement
    > {
    type?: 'h1' | 'h2' | 'h3' | 'p' | 'description';
    children: React.ReactNode;
}
