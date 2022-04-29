import React, {
    DetailedHTMLProps,
    Dispatch,
    HTMLAttributes,
    SetStateAction,
} from 'react';

export interface IMenu {
    setSection: Dispatch<SetStateAction<number>>;
    activeSection: number;
}

export interface IAction
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    active: boolean;
}
