import React, { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { IDocument } from '../../../types/actions/documents';
import { ModesKeywords } from '../../../constants';
export type ISelect = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>;

export interface ISelectDefault extends ISelect {
    children: React.ReactNode;
}

export interface ISelectDoc extends ISelect {
    data: IDocument[];
}

export interface ISelectSetting extends ISelect {
    data: ModesKeywords;
}
