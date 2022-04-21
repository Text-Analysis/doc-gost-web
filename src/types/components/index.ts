import React, {
    DetailedHTMLProps,
    Dispatch,
    HTMLAttributes,
    SetStateAction,
} from 'react';

import { IData } from '../actions/document';

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

export interface ILayoutBlock {
    sectionName: string;
    actions: React.ReactNode;
    mainPart: React.ReactNode;
}
