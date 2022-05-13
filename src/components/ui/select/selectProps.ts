import React, { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { ModesKeywords } from '../../../constants';
import { IDocument } from '../../../store/types/document';
import { IEntity } from '../../../store/types';

export interface ISelect
    extends DetailedHTMLProps<
        SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > {
    isError?: boolean;
}

export interface ISelectDefault extends ISelect {
    children: React.ReactNode;
    defaultOption?: string;
}

export interface ISelectEntity extends ISelect {
    defaultOption?: string;
    data: IEntity[];
}

export interface ISelectMode extends ISelect {
    defaultOption?: string;
    data: ModesKeywords;
}

export interface ISelectSection extends ISelect {
    defaultOption?: string;
    data: string[];
}
