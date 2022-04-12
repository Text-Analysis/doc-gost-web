import React, { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { IDocument } from '../../../types/actions/documents';
import { ModesKeywords } from '../../../constants';

export interface ISelect
    extends DetailedHTMLProps<
        SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > {
    isError?: boolean;
}

export interface ISelectDefault extends ISelect {
    children: React.ReactNode;
}

export interface ISelectDoc extends ISelect {
    data: IDocument[];
}

export interface ISelectMode extends ISelect {
    data: ModesKeywords;
}

export interface ISelectSection extends ISelect {
    data: string[];
}
