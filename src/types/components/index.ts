import React, {
    DetailedHTMLProps,
    Dispatch,
    HTMLAttributes,
    InputHTMLAttributes,
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

export interface IInput
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    isError?: boolean;
}

export interface IAlert
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    isError: boolean;
    visible: boolean;
}

export interface IButton
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    colorBtn: 'green' | 'blue';
    disableBtn?: boolean;
}
