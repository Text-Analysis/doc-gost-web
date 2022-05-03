import { ChangeEvent } from 'react';
import { IKeywordsTypeOne, Mode } from '../../services/serviceProps';

export interface IListPhrases {
    keywords: IKeywordsTypeOne | string[] | undefined;
    mode: Mode | undefined;
}

export interface ISettingsBlock {
    onChangeDocumentId: (e: ChangeEvent<HTMLSelectElement>) => void;
    onChangeMode: (e: ChangeEvent<HTMLSelectElement>) => void;
    onChangeSection: (e: ChangeEvent<HTMLSelectElement>) => void;
    getKeywords: () => void;
    sections: string[];
    loading: boolean;
}
