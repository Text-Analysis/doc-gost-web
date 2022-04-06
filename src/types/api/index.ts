import { IDocument } from '../actions/documents';
import { IData } from '../actions/document';

export interface RequestDocuments {
    data: IDocument[];
}

export interface IUpdateDocumentProps {
    structure: IData[];
}

export interface ICreateDocumentProps {
    name: string;
    structure: IData[];
}

export type Mode = 'tf_idf' | 'pullenti' | 'combine';

type IKeywordTypeOne = [string, number];

export type IKeywordsTypeOne = IKeywordTypeOne[];
