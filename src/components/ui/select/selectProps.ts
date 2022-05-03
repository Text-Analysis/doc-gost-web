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
}

export interface ISelectEntity extends ISelect {
    data: IEntity[];
}

export interface ISelectMode extends ISelect {
    data: ModesKeywords;
}

export interface ISelectSection extends ISelect {
    data: string[];
}
