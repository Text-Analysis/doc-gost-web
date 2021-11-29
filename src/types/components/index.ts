import React, {
    DetailedHTMLProps,
    Dispatch,
    HTMLAttributes,
    SelectHTMLAttributes,
    SetStateAction,
} from 'react';
import { IDocument } from '../actions/documents';
import { IData } from '../actions/document';

export interface ISelect
    extends DetailedHTMLProps<
        SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > {
    data: IDocument[];
}

export interface ILayout {
    data: IData[];
}

export type ITree = ILayout;

export interface ISection
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: React.ReactNode;
    title: string;
    text?: string;
}

export interface IMenu {
    setSection: Dispatch<SetStateAction<number>>;
    activeSection: number;
}

export interface IAction
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    active: boolean;
}
